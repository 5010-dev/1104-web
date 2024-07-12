import axios from 'axios'
import axiosInstance from '../../api/api'

import { handleError } from '../service-error'

import {
	UserAuthToken,
	UserAuthData,
	SignupPayload,
	EmailVerification,
	SignUpResponse,
	LoginResponse,
	ChangePassword,
	ChangePasswordResponse,
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
 * @param {Object} userData - 사용자 인증 정보 (이메일, 비밀번호, 셀러코드)
 * @returns {Promise<{ token: UserAuthToken, email: string }>} - 토큰, 이메일을 포함한 객체를 반환하는 Promise 객체
 */
export const signUp = async ({
	email,
	password,
	referral_code,
}: SignupPayload): Promise<{ token: UserAuthToken; email: string }> => {
	try {
		const response = await axios.post<SignUpResponse>(
			`${BASE_URL}/users/signup`,
			{ email, password, referral_code },
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
		await axiosInstance.post('/emails/signup-verification', null)
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
			`/emails/signup-verification/verify`,
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
 * 비밀번호 변경 인증 코드 전송을 요청하는 비동기 함수
 * @param {string} access - 액세스 토큰
 * @returns {Promise<void>} - Promise 객체
 */
export const sendPasswordResetVerification = async (
	access: string,
): Promise<void> => {
	try {
		await axiosInstance.post('/emails/password-reset-verification', null)
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 비밀번호 변경 인증 코드를 확인하고 비밀번호 재설정 토큰을 받아오는 비동기 함수
 * @param {Object} params - 비밀번호 재설정 확인에 필요한 매개변수
 * @param {string} params.access - 접근 토큰 (현재 사용되지 않음)
 * @param {string} params.code - 이메일로 받은 확인 코드
 * @returns {Promise<{password_reset_token: string}>} 비밀번호 재설정 토큰
 */
export const confirmPasswordReset = async ({
	access,
	code,
}: EmailVerification): Promise<{
	password_reset_token: string
}> => {
	try {
		const response = await axiosInstance.post(
			`/emails/password-reset-verification/verify`,
			{ code },
		)
		const { data } = response.data
		const { password_reset_token } = data
		return {
			password_reset_token,
		}
	} catch (error) {
		throw new Error(handleError(error))
	}
}

/**
 * 사용자 비밀번호 변경 함수
 * @param {Object} params - 비밀번호 변경에 필요한 매개변수
 * @param {string} params.password_reset_token - 비밀번호 재설정 토큰
 * @param {string} params.password - 새로운 비밀번호
 * @returns {Promise<ChangePasswordResponse>} 비밀번호 변경 결과
 */
export const changePassword = async ({
	password_reset_token,
	password,
}: ChangePassword): Promise<ChangePasswordResponse> => {
	try {
		const response = await axiosInstance.patch('/users/password', {
			password_reset_token,
			password,
		})
		const { data } = response.data
		const { token, email, is_email_verified } = data
		return {
			token,
			email,
			is_email_verified,
		}
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
