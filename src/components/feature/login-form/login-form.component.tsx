import { FormEvent, MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { login } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { setAccessToken, setRefreshToken } from '../../../utils/token.utils'

import AuthForm from '../../global/auth-form/auth-form.component'

export default function LoginForm() {
	const {
		email,
		password,
		updateLoginUser,
		updateIsUserDataLoaded,
		resetAuthData,
	} = useAuthDataStore()
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)

	const handleSignupLink = (e: MouseEvent<HTMLSpanElement>) =>
		navigate(ROUTES.LOGIN, { replace: true, routeState: 'signup' })

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
				updateIsUserDataLoaded(true)
				updateToastMessage('성공적으로 로그인 했습니다.')
				resetAuthData()
				navigate(ROUTES.HOME)
			} else {
				updateToastMessage('이메일 인증이 필요합니다.')
				navigate(`${ROUTES.VERIFICATION}?email=${loginEmail}`, {
					replace: true,
					routeState: 'signup',
				})
			}
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
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
