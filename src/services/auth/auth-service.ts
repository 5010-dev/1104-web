import axios from 'axios'

import {
	signIn,
	// signUp,
	signOut,
	confirmSignUp,
	resendSignUpCode,
	getCurrentUser,
	fetchAuthSession,
	type SignInInput,
	// SignUpInput,
	ConfirmSignUpInput,
} from 'aws-amplify/auth'
import { ErrorCode, errorMessages } from './auth-error'

import {
	UserAuthToken,
	UserAuthData,
	SignUpResponse,
} from './auth-service.types'

const BASE_URL = process.env.REACT_APP_BASE_URL

/**
 * AWS Amplify 사용자 로그인을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const logInWithCallback = async (
	{ username, password }: SignInInput,
	onLoading: () => void,
	onSuccess: (username: string, isSignedIn: boolean, nextStep: string) => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
): Promise<void> => {
	try {
		onLoading()
		const { isSignedIn, nextStep } = await signIn({ username, password })
		onSuccess(username, isSignedIn, nextStep.signInStep)
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error && error.toString())
		}
	} finally {
		onLoadingDone()
	}
}

/**
 * AWS Amplify 사용자 회원가입을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
// export const signUpWithCallback = async (
// 	{ username, password }: SignUpInput,
// 	onLoading: () => void,
// 	onSuccess: (
// 		username: string,
// 		isSignUpComplete: boolean,
// 		nextStep: string,
// 	) => void,
// 	onError: (error: any) => void,
// 	onLoadingDone: () => void,
// ): Promise<void> => {
// 	try {
// 		onLoading()
// 		const { isSignUpComplete, nextStep } = await signUp({
// 			username,
// 			password,
// 		})
// 		onSuccess(username, isSignUpComplete, nextStep.signUpStep)
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
		const { token, email: signedUpEmail } = response.data.data
		console.log(response.data)

		onSuccess(token, signedUpEmail)
	} catch (error) {
		if (axios.isAxiosError(error)) {
			if (error.response) {
				const errorData = error.response.data
				if (errorData.errors) {
					if (
						errorData.errors.non_field_errors &&
						errorData.errors.non_field_errors.length > 0
					) {
						onError(errorData.errors.non_field_errors[0])
					} else if (errorData.errors.field_errors) {
						const fieldName = Object.keys(errorData.errors.field_errors)[0]
						onError(errorData.errors.field_errors[fieldName][0])
					} else {
						onError('회원가입 중 오류가 발생했습니다.')
					}
				} else {
					onError('회원가입 중 오류가 발생했습니다.')
				}
			} else {
				// 네트워크 에러 등
				onError('회원가입 요청을 보내지 못했습니다.')
			}
		} else {
			onError('알 수 없는 오류가 발생했습니다.')
		}
	} finally {
		onLoadingDone()
	}
}

/**
 * AWS Amplify 유저네임과 인증코드를 받아 인증 작업 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const confirmSignupWithCallback = async (
	{ username, confirmationCode }: ConfirmSignUpInput,
	onLoading: () => void,
	onSuccess: (username: string) => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
) => {
	try {
		onLoading()
		await confirmSignUp({ username, confirmationCode })
		onSuccess(username)
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error && error.toString())
		}
	} finally {
		onLoadingDone()
	}
}

/**
 * AWS Amplify 인증 링크 재전송을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const resendVerificationWithCallback = async (
	username: string,
	onLoading: () => void,
	onSuccess: () => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
): Promise<void> => {
	try {
		onLoading()
		await resendSignUpCode({
			username,
		})
		onSuccess()
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error && error.toString())
		}
	} finally {
		onLoadingDone()
	}
}

/**
 * AWS Amplify 사용자 로그인 데이터를 가져오고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const getLoginUserDataWithCallback = async (
	onLoading: () => void,
	onSuccess: (loginId: string) => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
) => {
	try {
		onLoading()
		const { signInDetails } = await getCurrentUser()
		if (signInDetails?.loginId) {
			onSuccess(signInDetails?.loginId)
		} else {
			console.error('User data is undefined')
		}
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error && error.toString())
		}
	} finally {
		onLoadingDone()
	}
}

/**
 * AWS Amplify 사용자 로그인 세션을 불러와 반환하는 함수
 */
export const session = async () => await fetchAuthSession()

/**
 * AWS Amplify 사용자 로그 아웃을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const signOutWithCallback = async (
	onLoading: () => void,
	onSuccess: () => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
) => {
	try {
		onLoading()
		await signOut()
		onSuccess()
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error && error.toString())
		}
	} finally {
		onLoadingDone()
	}
}
