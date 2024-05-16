import { useState, MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import { resendVerificationWithCallback } from '../../../services/auth/auth-service'

import Lottie from 'lottie-react'
import verificationAnim from '../../../assets/lottie/verification-anim.json'

import AuthLayout from '../../global/auth-layout/auth-layout.component'
import { EmailVerificationContainer } from './email-verification.styles'

import Button from '../../../components/global/button/button.component'
import TextLink from '../../../components/global/text-link/text-link.component'
import Toast from '../../../components/global/toast/toast.component'

export default function EmailVerification() {
	const [errorMessage, setErrorMessage] = useState<string>('')
	const [searchParams] = useSearchParams()
	const email = searchParams.get('email')

	const handleResendCode = (e: MouseEvent<HTMLButtonElement>) => {
		email &&
			resendVerificationWithCallback(email, (error) => setErrorMessage(error))
	}

	const handleTextLink = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '회원가입 인증 관련 문의'
		const recipient = '5010.cs.kr@5010.tech'
		const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
			subject,
		)}`

		window.location.href = mailtoUrl
	}

	return (
		<AuthLayout>
			<EmailVerificationContainer>
				<Lottie
					animationData={verificationAnim}
					loop
					id="lottie-verification-anim"
				/>
				<div id="text-container">
					<h1 id="heading">이메일 인증 진행중</h1>
					<p id="body">
						{email}으로 인증메일이 발송되었습니다. 메일함, 또는 스팸 메일함을
						확인해 주세요.
					</p>
				</div>
				<Button
					type="button"
					id="resend-button"
					accessibleName="text-container"
					text="인증메일 재전송"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					size="md"
					handleClick={handleResendCode}
					disabled={!email}
				/>
				<TextLink
					id="text-link"
					appearance="neutral"
					hierarchy="secondary"
					size="sm"
					underlined
					text="도움이 필요하시다면, 여기를 클릭해 주세요."
					handleClick={handleTextLink}
				/>
			</EmailVerificationContainer>
			{errorMessage ? (
				<Toast
					text={errorMessage}
					duration={3000}
					onClose={() => setErrorMessage('')}
				/>
			) : null}
		</AuthLayout>
	)
}
