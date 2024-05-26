import {
	signIn,
	signUp,
	signOut,
	confirmSignUp,
	resendSignUpCode,
	getCurrentUser,
	fetchAuthSession,
	type SignInInput,
	SignUpInput,
	ConfirmSignUpInput,
} from 'aws-amplify/auth'
import { ErrorCode, errorMessages } from './auth-error'

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
export const signUpWithCallback = async (
	{ username, password }: SignUpInput,
	onLoading: () => void,
	onSuccess: (
		username: string,
		isSignUpComplete: boolean,
		nextStep: string,
	) => void,
	onError: (error: any) => void,
	onLoadingDone: () => void,
): Promise<void> => {
	try {
		onLoading()
		const { isSignUpComplete, nextStep } = await signUp({
			username,
			password,
		})
		onSuccess(username, isSignUpComplete, nextStep.signUpStep)
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
