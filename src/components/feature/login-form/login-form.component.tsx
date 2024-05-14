import { FormEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { logInWithCallback } from '../../../services/auth/authService'
import { useAuthDataStore } from '../../../store/authDataStore'

import AuthForm from '../../global/auth-form/auth-form.component'

export default function LoginForm() {
	const { email, password } = useAuthDataStore()
	const navigate = useNavigate()

	const handleSignupLink = (e: MouseEvent<HTMLSpanElement>) => {
		navigate('/login', { replace: true, state: { mode: 'signup' } })
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		logInWithCallback(
			{ username: email, password },
			(username) => {
				navigate('/login', { replace: true, state: { mode: 'verification' } })
			},
			(error) => {
				console.log('error signing in', error)
			},
		)
	}

	return (
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
	)
}
