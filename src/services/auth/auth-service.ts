import axios from 'axios'
import axiosInstance from '../../api/api'

import { handleError } from './auth-error'

import {
	UserAuthToken,
	UserAuthData,
	EmailVerification,
	SignUpResponse,
	LoginResponse,
} from './auth-service.types'
import { removeAccessToken, removeRefreshToken } from '../../utils/token.utils'

const BASE_URL = process.env.REACT_APP_BASE_URL

/**
 * 로그인을 수행하는 비동기 함수
 * @param {Object} userData - 사용자 인증 정보 (이메일, 비밀번호)
 * @returns {Promise<{ token: UserAuthToken, email: string, is_email_verified: boolean }>} - 토큰, 이메일, 이메일 인증 여부를 포함한 객체를 반환하는 Promise 객체
 */
export const login = async ({
	email,
	password,
}: UserAuthData): Promise<{
	token: UserAuthToken
	email: string
	is_email_verified: boolean
}> => {
	try {
		const response = await axios.post<LoginResponse>(
			`${BASE_URL}/users/login/email`,
			{ email, password },
		)
		const { data } = response.data
		const { token, email: loggedInEmail, is_email_verified } = data
		return { token, email: loggedInEmail, is_email_verified }
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 회원가입을 수행하는 비동기 함수
 * @param {Object} userData - 사용자 인증 정보 (이메일, 비밀번호)
 * @returns {Promise<{ token: UserAuthToken, email: string }>} - 토큰, 이메일을 포함한 객체를 반환하는 Promise 객체
 */
export const signUp = async ({
	email,
	password,
}: UserAuthData): Promise<{ token: UserAuthToken; email: string }> => {
	try {
		const response = await axios.post<SignUpResponse>(
			`${BASE_URL}/users/signup`,
			{ email, password },
		)
		const { data } = response.data
		const { token, email: signedUpEmail } = data
		return { token, email: signedUpEmail }
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 이메일 인증 코드 전송을 요청하는 비동기 함수
 * @param {string} access - 액세스 토큰
 * @returns {Promise<void>} - Promise 객체
 */
export const sendVerification = async (access: string): Promise<void> => {
	try {
		await axiosInstance.post(`/email-verifications/signup`, null)
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 이메일 인증 코드를 확인하고 사용자 인증 토큰을 받아오는 비동기 함수
 * @param {Object} emailVerification - 이메일 인증 정보 객체
 * @param {string} emailVerification.accessToken - 사용자 인증 토큰
 * @param {string} emailVerification.code - 이메일 인증 코드
 * @returns {Promise<{ token: UserAuthToken, email: string, is_email_verified: boolean }>} - 토큰, 이메일, 이메일 인증 여부를 포함한 객체를 반환하는 Promise 객체
 */
export const confirmSignup = async ({
	access,
	code,
}: EmailVerification): Promise<{
	token: UserAuthToken
	email: string
	is_email_verified: boolean
}> => {
	try {
		const response = await axiosInstance.post(
			`/email-verifications/signup/verify`,
			{ code },
		)
		const { data } = response.data
		const { token, email: signedUpEmail, is_email_verified } = data
		return { token, email: signedUpEmail, is_email_verified }
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 로그인한 사용자의 데이터를 가져오는 비동기 함수
 * @returns {Promise<{ email: string, is_email_verified: boolean }>} - 이메일과 이메일 인증 여부를 포함한 객체를 반환하는 Promise 객체
 */
export const getLoginUserData = async (): Promise<{
	email: string
	is_email_verified: boolean
}> => {
	try {
		const response = await axiosInstance.get('/users/me')
		const { data } = response.data
		const { email: loginEmail, is_email_verified } = data
		return { email: loginEmail, is_email_verified }
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 로그아웃을 수행하는 함수
 * @returns {Promise<void>} - Promise 객체
 */
export const logout = async (): Promise<void> => {
	try {
		removeAccessToken()
		removeRefreshToken()
	} catch (error) {
		throw new Error(handleError(error))
	}
}

// import axios from 'axios'
// import axiosInstance from '../../api/api'

// import { handleError } from './auth-error'

// import {
// 	UserAuthToken,
// 	UserAuthData,
// 	EmailVerification,
// 	SignUpResponse,
// 	LoginResponse,
// } from './auth-service.types'
// import { removeAccessToken, removeRefreshToken } from '../../utils/token.utils'

// const BASE_URL = process.env.REACT_APP_BASE_URL

// /**
//  * 로그인을 수행하는 비동기 함수
//  * @param {Object} userData - 사용자 인증 정보 (이메일, 비밀번호)
//  * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
//  * @param {Function} onSuccess - 로그인 성공 시 호출되는 콜백 함수 (토큰, 이메일을 인자로 받음)
//  * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 메시지를 인자로 받음)
//  * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
//  * @returns {Promise<void>} - Promise 객체
//  */
// export const loginWithCallback = async (
// 	{ email, password }: UserAuthData,
// 	onLoading: () => void,
// 	onSuccess: (
// 		token: UserAuthToken,
// 		email: string,
// 		is_email_verified: boolean,
// 	) => void,
// 	onError: (error: any) => void,
// 	onLoadingDone: () => void,
// ): Promise<void> => {
// 	try {
// 		onLoading()
// 		const response = await axios.post<LoginResponse>(
// 			`${BASE_URL}/users/login/email`,
// 			{ email, password },
// 		)
// 		const { data } = response.data
// 		const { token, email: loggedInEmail, is_email_verified } = data
// 		onSuccess(token, loggedInEmail, is_email_verified)
// 	} catch (error) {
// 		handleError(error, onError)
// 	} finally {
// 		onLoadingDone()
// 	}
// }

// /**
//  * 회원가입을 수행하는 비동기 함수
//  * @param {Object} userData - 사용자 인증 정보 (이메일, 비밀번호)
//  * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
//  * @param {Function} onSuccess - 회원가입 성공 시 호출되는 콜백 함수 (토큰, 이메일을 인자로 받음)
//  * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 메시지를 인자로 받음)
//  * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
//  * @returns {Promise<void>} - Promise 객체
//  */
// export const signUpWithCallback = async (
// 	{ email, password }: UserAuthData,
// 	onLoading: () => void,
// 	onSuccess: (token: UserAuthToken, email: string) => void,
// 	onError: (error: any) => void,
// 	onLoadingDone: () => void,
// ): Promise<void> => {
// 	try {
// 		onLoading()
// 		const response = await axios.post<SignUpResponse>(
// 			`${BASE_URL}/users/signup`,
// 			{ email, password },
// 		)
// 		const { data } = response.data
// 		const { token, email: signedUpEmail } = data
// 		onSuccess(token, signedUpEmail)
// 	} catch (error) {
// 		handleError(error, onError)
// 	} finally {
// 		onLoadingDone()
// 	}
// }

// /**
//  * 이메일 인증 코드 전송을 요청하는 비동기 함수
//  * @param {string} access - 액세스 토큰
//  * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
//  * @param {Function} onSuccess - 이메일 인증 요청 성공 시 호출되는 콜백 함수
//  * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 객체를 인자로 받음)
//  * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
//  * @returns {Promise<void>} - Promise 객체
//  */
// export const sendVerification = async (
// 	access: string,
// 	onLoading: () => void,
// 	onSuccess: () => void,
// 	onError: (error: any) => void,
// 	onLoadingDone: () => void,
// ): Promise<void> => {
// 	try {
// 		onLoading()
// 		await axiosInstance.post(`/email-verifications/signup`, null)
// 		onSuccess()
// 	} catch (error) {
// 		handleError(error, onError)
// 	} finally {
// 		onLoadingDone()
// 	}
// }

// /**
//  * 이메일 인증 코드를 확인하고 사용자 인증 토큰을 받아오는 비동기 함수
//  * @param {Object} emailVerification - 이메일 인증 정보 객체
//  * @param {string} emailVerification.accessToken - 사용자 인증 토큰
//  * @param {string} emailVerification.code - 이메일 인증 코드
//  * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
//  * @param {Function} onSuccess - 이메일 인증 확인 성공 시 호출되는 콜백 함수 (사용자 인증 토큰과 이메일을 인자로 받음)
//  * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 객체를 인자로 받음)
//  * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
//  * @returns {Promise<void>} - Promise 객체
//  */
// export const confirmSignupWithCallback = async (
// 	{ access, code }: EmailVerification,
// 	onLoading: () => void,
// 	onSuccess: (
// 		token: UserAuthToken,
// 		email: string,
// 		is_email_verified: boolean,
// 	) => void,
// 	onError: (error: any) => void,
// 	onLoadingDone: () => void,
// ): Promise<void> => {
// 	try {
// 		onLoading()
// 		const response = await axiosInstance.post(
// 			`/email-verifications/signup/verify`,
// 			{ code },
// 		)
// 		const { data } = response.data
// 		const { token, email: signedUpEmail, is_email_verified } = data
// 		onSuccess(token, signedUpEmail, is_email_verified)
// 	} catch (error) {
// 		handleError(error, onError)
// 	} finally {
// 		onLoadingDone()
// 	}
// }

// /**
//  * 로그인한 사용자의 데이터를 가져오는 비동기 함수
//  * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
//  * @param {Function} onSuccess - 사용자 데이터 가져오기 성공 시 호출되는 콜백 함수 (이메일과 이메일 인증 여부를 인자로 받음)
//  * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 객체를 인자로 받음)
//  * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
//  * @returns {Promise<void>} - Promise 객체
//  */
// export const getLoginUserDataWithCallback = async (
// 	onLoading: () => void,
// 	onSuccess: (email: string, is_email_verified: boolean) => void,
// 	onError: (error: any) => void,
// 	onLoadingDone: () => void,
// ): Promise<void> => {
// 	try {
// 		onLoading()
// 		const response = await axiosInstance.get('/users/me')
// 		const { data } = response.data
// 		const { email: loginEmail, is_email_verified } = data
// 		onSuccess(loginEmail, is_email_verified)
// 	} catch (error) {
// 		handleError(error, onError)
// 	} finally {
// 		onLoadingDone()
// 	}
// }

// /**
//  * 로그아웃을 수행하는 함수
//  * @param {Function} onSuccess - 로그아웃 성공 시 호출되는 콜백 함수 (선택적)
//  * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 객체를 인자로 받음) (선택적)
//  * @returns {void}
//  */
// export const logoutWithCallback = (
// 	onSuccess?: () => void,
// 	onError?: (error: any) => void,
// ) => {
// 	try {
// 		removeAccessToken()
// 		removeRefreshToken()
// 		onSuccess && onSuccess()
// 	} catch (error) {
// 		onError && onError(error)
// 	}
// }
