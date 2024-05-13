import { signIn, type SignInInput } from 'aws-amplify/auth'
import { useNavigate } from 'react-router-dom'

import { useAuthDataStore } from '../../../store/authDataStore'

import AuthLayout from '../../global/auth-layout/auth-layout.page'

export default function Login() {
	const { email, password } = useAuthDataStore((state) => state)
	const username = email
	const navigate = useNavigate()

	const handleSubmit = async ({ username, password }: SignInInput) => {
		try {
			const { isSignedIn, nextStep } = await signIn({ username, password })
			console.log(isSignedIn)
			console.log(nextStep)

			if (nextStep.signInStep === 'CONFIRM_SIGN_UP') {
				navigate(`/verification?email=${encodeURIComponent(email)}`)
			}
		} catch (error) {
			console.log('error signing in', error)
		}
	}

	return (
		<AuthLayout
			heading="로그인"
			submitText="이메일로 로그인하기"
			handleAuthSubmit={() => handleSubmit({ username, password })}
		/>
	)
}
