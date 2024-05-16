import { FormEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUpWithCallback } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'

import AuthForm from '../../global/auth-form/auth-form.component'

export default function SignupForm() {
	const { email, password } = useAuthDataStore()
	const { updateToastMessage } = useToastMessageStore()
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
				updateToastMessage(error)
			},
		)
	}

	return (
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
	)
}
