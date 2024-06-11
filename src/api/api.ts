// axiosInterceptor.ts
import axios, {
	AxiosError,
	AxiosInstance,
	InternalAxiosRequestConfig,
} from 'axios'

import {
	getAccessToken,
	getRefreshToken,
	setAccessToken,
} from '../utils/token.utils'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
})

// 요청 인터셉터 추가
axiosInstance.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		const accessToken = getAccessToken()

		if (!accessToken) {
			const refreshToken = getRefreshToken()
			if (refreshToken) {
				try {
					const response = await axios.post(
						`${process.env.REACT_APP_BASE_URL}/token/refresh`,
						{
							refresh: refreshToken,
						},
					)
					const { data } = response.data
					const newAccessToken = data.access
					setAccessToken(newAccessToken)
				} catch (error) {
					console.log(error)
					return Promise.reject(error)
				}
			} else {
				return config
			}
		}
		config.headers['Authorization'] = `Bearer ${getAccessToken()}`
		return config
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	},
)

export default axiosInstance
