import { signUp } from 'aws-amplify/auth'

import { useAuthDataStore } from '../../../store/authDataStore'

import AuthLayout from '../../global/auth-layout/auth-layout.page'

type SingUpParameters = {
	username: string
	password: string
}

export default function Signup() {
	const { email, password } = useAuthDataStore((state) => state)
	const username = email

	const handleSubmit = async ({ username, password }: SingUpParameters) => {
		try {
			const { isSignUpComplete, nextStep } = await signUp({
				username,
				password,
			})
			console.log(isSignUpComplete)
			console.log(nextStep)
		} catch (error) {
			console.log('error signing up:', error)
			// 이미 가입된 이메일이므로, 토스트로 '이미 가입된 이메일입니다. 로그인하기' 띄우고, 로그인 화면으로 리디렉션
		}
	}

	return (
		<AuthLayout
			heading="회원 가입"
			submitText="이메일로 가입하기"
			handleAuthSubmit={() => handleSubmit({ username, password })}
		/>
	)
}
