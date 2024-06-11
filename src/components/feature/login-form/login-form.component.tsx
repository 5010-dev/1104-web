import { useEffect, FormEvent, MouseEvent } from 'react'

import { login } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useLoadingStore } from '../../../store/loadingStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { setAccessToken, setRefreshToken } from '../../../utils/token.utils'

import AuthForm from '../../global/auth-form/auth-form.component'

export default function LoginForm() {
	const { email, password, updateLoginUser } = useAuthDataStore()
	const { userId, isEmailVerified } = useAuthDataStore(
		(state) => state.loginUser,
	)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)

	const handleSignupLink = (e: MouseEvent<HTMLSpanElement>) =>
		navigate('/login', { replace: true, routeState: 'signup' })

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			updateIsLoading(true)

			const {
				token,
				email: loginEmail,
				is_email_verified,
			} = await login({ email, password })
			setAccessToken(token.access)
			setRefreshToken(token.refresh)

			if (is_email_verified) {
				updateLoginUser('userId', loginEmail)
				updateLoginUser('isEmailVerified', is_email_verified)
				updateToastMessage('성공적으로 로그인 했습니다.')
				navigate('/')
			} else {
				updateToastMessage('이메일 인증이 필요합니다.')
				navigate(`/verification?email=${loginEmail}`, { replace: true })
			}
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}

		// loginWithCallback(
		// 	{ email, password },
		// 	() => updateIsLoading(true), // onLoading
		// 	(token, loginEmail, is_email_verified) => {
		// 		setAccessToken(token.access)
		// 		setRefreshToken(token.refresh)

		// 		if (is_email_verified) {
		// 			updateLoginUser('userId', loginEmail)
		// 			updateLoginUser('isEmailVerified', is_email_verified)
		// 			updateToastMessage('성공적으로 로그인 했습니다.')
		// 			navigate('/')
		// 		} else {
		// 			updateToastMessage('이메일 인증이 필요합니다.')
		// 			navigate(`/verification?email=${loginEmail}`, { replace: true })
		// 		}
		// 	},
		// 	(error) => {
		// 		updateToastMessage(error)
		// 	},
		// 	() => updateIsLoading(false), // onLoadingDone
		// )
	}

	// TODO: 이 부분은 한 번 더 점검 필요. 이메일 인증 전/후 계정에 따라 어떻게 반응하는지 체크 필요.
	useEffect(() => {
		if (userId && isEmailVerified) {
			navigate('/')
		}
	}, [userId, isEmailVerified, navigate])

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
