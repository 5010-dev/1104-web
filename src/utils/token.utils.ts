import { useAuthDataStore } from '../store/authDataStore'
import CryptoJS from 'crypto-js'

const REFRESH_TOKEN_KEY = 'refresh'
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

export const setAccessToken = (token: string) => {
	useAuthDataStore.getState().updateLoginUser('access', token)
}

export const getAccessToken = () => {
	return useAuthDataStore.getState().loginUser.access
}

export const removeAccessToken = () => {
	useAuthDataStore.getState().updateLoginUser('access', '')
}

export const setRefreshToken = (token: string) => {
	const encryptedToken = CryptoJS.AES.encrypt(token, SECRET_KEY).toString()
	localStorage.setItem(REFRESH_TOKEN_KEY, encryptedToken)
}

export const getRefreshToken = () => {
	const encryptedToken = localStorage.getItem(REFRESH_TOKEN_KEY)
	if (encryptedToken) {
		const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY)
		return bytes.toString(CryptoJS.enc.Utf8)
	}
	return null
}

export const removeRefreshToken = () => {
	localStorage.removeItem(REFRESH_TOKEN_KEY)
}
