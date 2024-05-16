import {
	signIn,
	signUp,
	resendSignUpCode,
	type SignInInput,
	SignUpInput,
} from 'aws-amplify/auth'
import { ErrorCode, errorMessages } from './auth-error'

/**
 * AWS Amplify 사용자 인증을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const logInWithCallback = async (
	{ username, password }: SignInInput,
	onSuccess: (username: string, isSignedIn: boolean, nextStep: string) => void,
	onError: (error: any) => void,
): Promise<void> => {
	try {
		const { isSignedIn, nextStep } = await signIn({ username, password })
		onSuccess(username, isSignedIn, nextStep.signInStep)
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error)
		}
	}
}

/**
 * AWS Amplify 사용자 회원가입을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const signUpWithCallback = async (
	{ username, password }: SignUpInput,
	onSuccess: (username: string) => void,
	onError: (error: any) => void,
): Promise<void> => {
	try {
		const { isSignUpComplete, nextStep } = await signUp({
			username,
			password,
		})
		console.log(isSignUpComplete)
		console.log(nextStep)

		onSuccess(username)
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error)
		}
	}
}

/**
 * AWS Amplify 인증 링크 재전송을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const resendVerificationWithCallback = async (
	username: string,
	onError: (error: any) => void,
): Promise<void> => {
	try {
		await resendSignUpCode({
			username,
		})
	} catch (error) {
		if (error instanceof Error && error.name in ErrorCode) {
			onError(errorMessages[error.name as keyof typeof ErrorCode])
		} else {
			onError(error)
		}
	}
}
