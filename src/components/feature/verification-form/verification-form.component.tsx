import { useState, useEffect, FormEvent, MouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/authDataStore'
import {
	confirmSignup,
	sendVerification,
} from '../../../services/auth/auth-service'
import { useLoadingStore } from '../../../store/loadingStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'
import {
	getAccessToken,
	setAccessToken,
	setRefreshToken,
} from '../../../utils/token.utils'

import { VerificationFormProps } from './verification-form.types'
import { VerificationFormContainer } from './verification-form.styles'

import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

import VerificationInput from './verification-input/verification-input.component'

export default function VerificationForm(props: VerificationFormProps) {
	const { email } = props

	const { updateToastMessage } = useToastMessageStore()
	const {
		verificationCode,
		updateAuthData,
		updateLoginUser,
		updateIsUserDataLoaded,
		resetAuthData,
	} = useAuthDataStore()
	const updateIsLoading = useLoadingStore((state) => state.updateIsLoading)
	const [isValid, setIsValid] = useState<boolean>(false)
	const navigate = useNavigateWithScroll()
	const location = useLocation()
	const routeState = location.state as
		| { mode: 'signup' | 'password-reset' }
		| undefined
	const maxLength = 6

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		try {
			updateIsLoading(true)

			const {
				token,
				email: loginEmail,
				is_email_verified,
			} = await confirmSignup({
				access: getAccessToken(),
				code: verificationCode,
			})
			setAccessToken(token.access)
			setRefreshToken(token.refresh)
			updateLoginUser('userId', loginEmail)
			updateLoginUser('isEmailVerified', is_email_verified)
			updateIsUserDataLoaded(true)
			updateToastMessage('회원 가입이 완료되었습니다.')
			resetAuthData()
			navigate(ROUTES.HOME)
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	const handleResendCode = async (e: MouseEvent<HTMLSpanElement>) => {
		try {
			updateIsLoading(true)

			await sendVerification(getAccessToken())
			updateToastMessage('가입하신 이메일로 인증 코드를 전송했습니다.')
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	useEffect(() => {
		updateAuthData('verificationCode', '')

		if (routeState?.mode === undefined) {
			navigate(ROUTES.HOME)
			updateToastMessage('잘못된 요청입니다.')
		}
	}, [updateAuthData, navigate, routeState, updateToastMessage])

	useEffect(() => {
		setIsValid(verificationCode.length < 6 ? false : true)
	}, [verificationCode])

	return (
		<>
			{routeState?.mode === undefined ? null : (
				<>
					<VerificationFormContainer>
						<div id="verification-text-container">
							<h1 id="heading">이메일 인증</h1>
							<p id="body">
								{email}
								<br />
								메일함, 또는 스팸 메일함을 확인해 주세요.
							</p>
						</div>
						<form id="verification-form" onSubmit={handleSubmit}>
							<VerificationInput maxLength={maxLength} />
							<Button
								id="submit-button"
								type="submit"
								text="이메일 인증하기"
								accessibleName="verification-form"
								appearance="accent"
								hierarchy="primary"
								stroke="filled"
								shape="rounding"
								size="md"
								disabled={!isValid}
							/>
						</form>
					</VerificationFormContainer>
					<TextLink
						description="인증코드를 못받으셨다면"
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						underlined
						text="인증코드 재전송"
						handleClick={handleResendCode}
					/>
				</>
			)}
		</>
	)
}
