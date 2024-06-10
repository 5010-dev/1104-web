import { useAuthDataStore } from '../store/authDataStore'

export const setAccessToken = (token: string) => {
	useAuthDataStore.getState().updateLoginUser('accessToken', token)
}

export const getAccessToken = () => {
	return useAuthDataStore.getState().loginUser.accessToken
}

export const removeAccessToken = () => {
	useAuthDataStore.getState().updateLoginUser('accessToken', '')
}

export const getRefreshToken = () => {
	const cookies = document.cookie.split('; ')
	const refreshTokenCookie = cookies.find((cookie) =>
		cookie.startsWith('refreshToken'),
	)
	if (refreshTokenCookie) {
		return refreshTokenCookie.split('=')[1]
	}
	return null
}

// export const setRefreshToken = (token: string) => {
// 	document.cookie = `refreshToken=${token}; HttpOnly; Secure; SameSite=Lax; path=/; Max-Age=${
// 		24 * 60 * 60
// 	}`
// }

// export const removeRefreshToken = (token: string) => {
// 	document.cookie =
// 		'refreshToken=; HttpOnly; Secure; SameSite=Lax; path=/; Max-Age=0'
// }
