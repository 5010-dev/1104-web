import axios from 'axios'
import axiosInstance from '../../api/api'

import { handleError } from '../service-error'

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
		await axiosInstance.post(`/emails/signup-verification`, null)
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
