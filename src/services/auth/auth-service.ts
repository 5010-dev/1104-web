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

const BASE_URL = process.env.REACT_APP_BASE_URL

/**
 * 로그인을 수행하는 비동기 함수
 * @param {Object} userData - 사용자 인증 정보 (이메일, 비밀번호)
 * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
 * @param {Function} onSuccess - 로그인 성공 시 호출되는 콜백 함수 (토큰, 이메일을 인자로 받음)
 * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 메시지를 인자로 받음)
 * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
 * @returns {Promise<void>} - Promise 객체
 */
export const loginWithCallback = async (
	{ email, password }: UserAuthData,
	onLoading: () => void,
	onSuccess: (token: UserAuthToken, email: string) => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
): Promise<void> => {
	try {
		onLoading()
		const response = await axios.post<LoginResponse>(
			`${BASE_URL}/users/login/email`,
			{ email, password },
		)
		const { data } = response.data
		const { token, email: loggedInEmail } = data
		onSuccess(token, loggedInEmail)
	} catch (error) {
		handleError(error, onError)
	} finally {
		onLoadingDone()
	}
}

/**
 * 회원가입을 수행하는 비동기 함수
 * @param {Object} userData - 사용자 인증 정보 (이메일, 비밀번호)
 * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
 * @param {Function} onSuccess - 회원가입 성공 시 호출되는 콜백 함수 (토큰, 이메일을 인자로 받음)
 * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 메시지를 인자로 받음)
 * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
 * @returns {Promise<void>} - Promise 객체
 */
export const signUpWithCallback = async (
	{ email, password }: UserAuthData,
	onLoading: () => void,
	onSuccess: (token: UserAuthToken, email: string) => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
): Promise<void> => {
	try {
		onLoading()
		const response = await axios.post<SignUpResponse>(
			`${BASE_URL}/users/signup`,
			{ email, password },
		)
		const { data } = response.data
		// TODO: is_email_verified 값 받기 추가
		const { token, email: signedUpEmail } = data
		onSuccess(token, signedUpEmail)
	} catch (error) {
		handleError(error, onError)
	} finally {
		onLoadingDone()
	}
}

/**
 * 이메일 인증 코드 전송을 요청하는 비동기 함수
 * @param {Object} token - 사용자 인증 토큰
 * @param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
 * @param {Function} onSuccess - 이메일 인증 요청 성공 시 호출되는 콜백 함수
 * @param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 객체를 인자로 받음)
 * @param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
 * @returns {Promise<void>} - Promise 객체
 */
export const sendVerification = async (
	accessToken: string,
	onLoading: () => void,
	onSuccess: () => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
): Promise<void> => {
	try {
		onLoading()
		await axiosInstance.post(`/email-verifications/signup`, null, {
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		})
		onSuccess()
	} catch (error) {
		handleError(error, onError)
	} finally {
		onLoadingDone()
	}
}

/**
이메일 인증 코드를 확인하고 사용자 인증 토큰을 받아오는 비동기 함수
@param {Object} emailVerification - 이메일 인증 정보 객체
@param {string} emailVerification.accessToken - 사용자 인증 토큰
@param {string} emailVerification.code - 이메일 인증 코드
@param {Function} onLoading - 로딩 상태 시작 시 호출되는 콜백 함수
@param {Function} onSuccess - 이메일 인증 확인 성공 시 호출되는 콜백 함수 (사용자 인증 토큰과 이메일을 인자로 받음)
@param {Function} onError - 에러 발생 시 호출되는 콜백 함수 (에러 객체를 인자로 받음)
@param {Function} onLoadingDone - 로딩 상태 종료 시 호출되는 콜백 함수
@returns {Promise<void>} - Promise 객체
*/
export const confirmSignupWithCallback = async (
	{ accessToken, code }: EmailVerification,
	onLoading: () => void,
	onSuccess: (token: UserAuthToken, email: string) => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
): Promise<void> => {
	try {
		onLoading()
		const response = await axiosInstance.post(
			`/email-verifications/signup/verify`,
			{ code },
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		)
		const { data } = response.data
		// TODO: is_email_verified 값 받기 추가
		const { token, email: signedUpEmail } = data
		onSuccess(token, signedUpEmail)
	} catch (error) {
		handleError(error, onError)
	} finally {
		onLoadingDone()
	}
}

/**
 * AWS Amplify 사용자 로그인 데이터를 가져오고, 결과에 따라 콜백 함수를 호출하는 함수
 */
// export const getLoginUserDataWithCallback = async (
// 	onLoading: () => void,
// 	onSuccess: (loginId: string) => void,
// 	onError: (error: any) => void,
// 	onLoadingDone: () => void,
// ) => {
// 	try {
// 		onLoading()
// 		const { signInDetails } = await getCurrentUser()
// 		if (signInDetails?.loginId) {
// 			onSuccess(signInDetails?.loginId)
// 		} else {
// 			console.error('User data is undefined')
// 		}
// 	} catch (error) {
// 		if (error instanceof Error && error.name in ErrorCode) {
// 			onError(errorMessages[error.name as keyof typeof ErrorCode])
// 		} else {
// 			onError(error && error.toString())
// 		}
// 	} finally {
// 		onLoadingDone()
// 	}
// }
