// axiosInterceptor.ts
import axios, {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios'

// InternalAxiosRequestConfig 타입 확장
interface AxiosRequestConfigWithRetry extends InternalAxiosRequestConfig {
	_retry?: boolean
}

const axiosInstance: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
})

// 쿠키에서 리프레시 토큰 읽어오는 함수
function getCookie(name: string): string | null {
	const value = `; ${document.cookie}`
	const parts = value.split(`; ${name}=`)
	if (parts.length === 2) {
		return parts.pop()?.split(';').shift() || null
	}
	return null
}

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const accessToken = localStorage.getItem('accessToken')
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`
		}
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	},
)

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
	(response: AxiosResponse) => {
		return response
	},
	async (error: AxiosError) => {
		const originalRequest = error.config as
			| AxiosRequestConfigWithRetry
			| undefined
		if (
			error.response?.status === 401 &&
			originalRequest &&
			!originalRequest._retry
		) {
			originalRequest._retry = true
			try {
				const refreshToken = getCookie('refreshToken')
				const response = await axios.post(
					'/refresh-token',
					{ refreshToken },
					{ withCredentials: true },
				)
				const newAccessToken = response.data.accessToken
				localStorage.setItem('accessToken', newAccessToken)
				axiosInstance.defaults.headers.common[
					'Authorization'
				] = `Bearer ${newAccessToken}`
				return axiosInstance(originalRequest)
			} catch (refreshError) {
				// 리프레시 토큰도 만료되었거나 유효하지 않은 경우 로그아웃 처리
				localStorage.removeItem('accessToken')
				document.cookie =
					'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
				window.location.href = '/login'
				return Promise.reject(refreshError)
			}
		}
		return Promise.reject(error)
	},
)

export default axiosInstance
