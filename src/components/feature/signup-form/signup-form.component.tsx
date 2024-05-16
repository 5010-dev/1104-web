import { useState, FormEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUpWithCallback } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'

import AuthForm from '../../global/auth-form/auth-form.component'
import Toast from '../../global/toast/toast.component'

export default function SignupForm() {
	const [errorMessage, setErrorMessage] = useState<string>('')
	const { email, password } = useAuthDataStore()
	const navigate = useNavigate()

	const handleLoginLink = (e: MouseEvent<HTMLSpanElement>) => {
		navigate('/login', { replace: true, state: { mode: 'login' } })
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		signUpWithCallback(
			{ username: email, password },
			(username) => {
				navigate(`/verification?email=${username}`, { replace: true })
			},
			(error) => {
				setErrorMessage(error)
			},
		)
	}

	return (
		<>
			<AuthForm
				heading="회원 가입"
				submitText="이메일로 가입하기"
				handleAuthSubmit={handleSubmit}
				textLink={{
					descriptionMessage: '이미 회원이시라면',
					linkMessage: '로그인하기',
					handleTextLink: handleLoginLink,
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
