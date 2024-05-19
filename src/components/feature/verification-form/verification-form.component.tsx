import { useState, useEffect, FormEvent, MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useToastMessageStore } from '../../../store/globalUiStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import {
	resendVerificationWithCallback,
	confirmSignupWithCallback,
	logInWithCallback,
} from '../../../services/auth/auth-service'

import { VerificationFormProps } from './verification-form.types'
import { VerificationFormContainer } from './verification-form.styles'

import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

import VerificationInput from './verification-input/verification-input.component'

export default function VerificationForm(props: VerificationFormProps) {
	const { email } = props

	const { updateToastMessage } = useToastMessageStore()
	const { password, verificationCode, updateAuthData, resetAuthData } =
		useAuthDataStore()
	const [isValid, setIsValid] = useState<boolean>(false)
	const navigate = useNavigate()
	const maxLength = 6

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		confirmSignupWithCallback(
			{ username: email, confirmationCode: verificationCode },
			(email) => {
				updateToastMessage('회원 가입이 완료되었습니다.')
				if (password) {
					logInWithCallback(
						{ username: email, password },
						() => {
							window.location.replace('/')
							resetAuthData()
							// 또는 '/'으로 랜딩하면서 팝업 (할인 및 체험판) 제공?
						},
						(error) => updateToastMessage(error),
					)
				} else {
					navigate('/login', { state: { mode: 'login' } })
					updateToastMessage(
						'회원 가입이 완료되었습니다. 등록된 이메일로 로그인해 주세요.',
					)
				}
			},
			(error) => updateToastMessage(error),
		)
	}

	const handleResendCode = (e: MouseEvent<HTMLSpanElement>) => {
		email &&
			resendVerificationWithCallback(
				email,
				() =>
					updateToastMessage(
						'이메일 인증 코드를 재전송 했습니다. 메일함을 확인해 주세요.',
					),
				(error) => updateToastMessage(error),
			)
	}

	useEffect(() => {
		updateAuthData('verificationCode', '')
	}, [updateAuthData])

	useEffect(() => {
		setIsValid(verificationCode.length < 6 ? false : true)
	}, [verificationCode])

	return (
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
	)
}
