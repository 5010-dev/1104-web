import { useEffect, FormEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import {
	logInWithCallback,
	getLoginUserDataWithCallback,
} from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useLoadingStore } from '../../../store/loadingStore'
import { useToastMessageStore } from '../../../store/globalUiStore'

import AuthForm from '../../global/auth-form/auth-form.component'

export default function LoginForm() {
	const { email, password, updateLoginUser } = useAuthDataStore()
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigate()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)

	const handleSignupLink = (e: MouseEvent<HTMLSpanElement>) => {
		navigate('/login', { replace: true, state: { mode: 'signup' } })
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		logInWithCallback(
			{ username: email, password },
			() => updateIsLoading(true), // onLoading
			async (username, isSignedIn, nextStep) => {
				if (isSignedIn) {
					await getLoginUserDataWithCallback(
						(loginId) => {
							updateLoginUser(loginId)
							updateToastMessage('성공적으로 로그인 했습니다.')
							navigate('/')
						},
						(error) => updateToastMessage(error),
					)
				} else if (!isSignedIn) {
					switch (nextStep) {
						case 'CONFIRM_SIGN_UP':
							navigate(`/verification?email=${username}`, { replace: true })
							break
						case 'CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED':
							console.log(nextStep)
							break
						default:
							console.log(nextStep)
							break
					}
				}
			},
			(error) => {
				updateToastMessage(error)
			},
			() => updateIsLoading(false), // onLoadingDone
		)
	}

	useEffect(() => {
		if (userId) {
			navigate('/')
		}
	}, [userId, navigate])

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
