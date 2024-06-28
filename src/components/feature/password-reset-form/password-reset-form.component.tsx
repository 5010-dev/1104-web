import { useEffect, useRef, FormEvent, MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { changePassword } from '../../../services/auth/auth-service'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useLoadingStore } from '../../../store/loadingStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { setAccessToken, setRefreshToken } from '../../../utils/token.utils'

import AuthForm from '../../global/auth-form/auth-form.component'

export default function PasswordResetForm() {
	const {
		password,
		passwordResetToken,
		updateLoginUser,
		updateIsUserDataLoaded,
		resetAuthData,
		resetPasswordResetToken,
	} = useAuthDataStore()
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const isReallyUnmounting = useRef(false)

	const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '비밀번호 변경 관련 문의사항'
		const recipient = '5010.cs.kr@5010.tech'
		const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
			subject,
		)}`

		window.location.href = mailtoUrl
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			updateIsLoading(true)

			const { token, email, is_email_verified } = await changePassword({
				password_reset_token: passwordResetToken,
				password,
			})
			setAccessToken(token.access)
			setRefreshToken(token.refresh)

			if (is_email_verified) {
				updateLoginUser('userId', email)
				updateLoginUser('isEmailVerified', is_email_verified)
				updateIsUserDataLoaded(true)
				updateToastMessage('비밀번호 변경이 완료되었습니다.')
				resetAuthData()
				resetPasswordResetToken()
				navigate(ROUTES.HOME, { replace: true })
			}
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	useEffect(() => {
		return () => {
			if (!isReallyUnmounting.current) {
				isReallyUnmounting.current = true
			} else {
				resetPasswordResetToken()
			}
		}
	}, [resetPasswordResetToken])

	return (
		<AuthForm
			variant="password-reset"
			heading="비밀번호 변경"
			submitText="비밀번호 변경하기"
			handleAuthSubmit={handleSubmit}
			textLink={{
				descriptionMessage: '도움이 필요하시다면',
				linkMessage: '여기를 클릭해 주세요.',
				handleTextLink: handleGetHelp,
			}}
		></AuthForm>
	)
}
