import { signIn, signUp, type SignInInput, SignUpInput } from 'aws-amplify/auth'

/**
 * AWS Amplify 사용자 인증을 수행하고, 결과에 따라 콜백 함수를 호출하는 함수
 */
export const logInWithCallback = async (
	{ username, password }: SignInInput,
	onSuccess: (username: string) => void,
	onError: (error: any) => void,
): Promise<void> => {
	try {
		const { isSignedIn, nextStep } = await signIn({ username, password })
		console.log(isSignedIn)
		console.log(nextStep)

		if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
			onSuccess(username)
		}
	} catch (error) {
		onError(error)
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
		onError(error)
	}
}
