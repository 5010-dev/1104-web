import { useState, FormEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { logInWithCallback } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'

import AuthForm from '../../global/auth-form/auth-form.component'
import Toast from '../../global/toast/toast.component'

export default function LoginForm() {
	const [errorMessage, setErrorMessage] = useState<string>('')
	const { email, password } = useAuthDataStore()
	const navigate = useNavigate()

	const handleSignupLink = (e: MouseEvent<HTMLSpanElement>) => {
		navigate('/login', { replace: true, state: { mode: 'signup' } })
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		logInWithCallback(
			{ username: email, password },
			(username, isSignedIn, nextStep) => {
				if (isSignedIn) {
					// 로그인 완료
				} else if (!isSignedIn) {
					nextStep === 'CONFIRM_SIGN_UP' &&
						navigate(`/verification?email=${username}`, { replace: true })
				}
			},
			(error) => {
				setErrorMessage(error)
			},
		)
	}

	return (
		<>
			<AuthForm
				heading="로그인"
				submitText="이메일로 로그인하기"
				handleAuthSubmit={handleSubmit}
				textLink={{
					descriptionMessage: '아직 회원이 아니시라면',
					linkMessage: '지금 가입하기',
					handleTextLink: handleSignupLink,
				}}
			></AuthForm>
			{errorMessage ? (
				<Toast
					text={errorMessage}
					duration={3000}
					onClose={() => setErrorMessage('')}
				/>
			) : null}
		</>
	)
}
