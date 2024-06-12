import { useEffect, MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

import Lottie from 'lottie-react'
import verificationAnim from '../../../assets/lottie/verification-anim.json'

import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import AuthLayout from '../../global/auth-layout/auth-layout.component'
import { EmailVerificationContainer } from './email-verification.styles'

import VerificationForm from '../../../components/feature/verification-form/verification-form.component'
import TextLink from '../../../components/global/text-link/text-link.component'

export default function EmailVerification() {
	// TODO: 이 부분 싹 다 고쳐야 함. 로그인 한 상태에서도 접속이 가능함.
	// 로그인 한 상태라면(userId 있으면), 또는 refresh 없으면 홈으로 리디렉션 하도록

	const [searchParams] = useSearchParams()
	const email = searchParams.get('email')
	const navigate = useNavigateWithScroll()

	const handleHelpLink = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '회원가입 인증 관련 문의'
		const recipient = '5010.cs.kr@5010.tech'
		const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
			subject,
		)}`

		window.location.href = mailtoUrl
	}

	// TODO: 이 부분을 홈으로 리디렉션하도록 변경
	useEffect(() => {
		if (!email) {
			navigate('/login', { routeState: 'login' })
		}
	}, [email, navigate])

	return (
		<AuthLayout>
			<EmailVerificationContainer>
				<Lottie
					animationData={verificationAnim}
					loop
					id="lottie-verification-anim"
				/>
				<VerificationForm email={email ? email : ''} />
				<TextLink
					id="text-link"
					appearance="neutral"
					hierarchy="secondary"
					size="sm"
					underlined
					text="도움이 필요하시다면, 여기를 클릭해 주세요."
					handleClick={handleHelpLink}
				/>
			</EmailVerificationContainer>
		</AuthLayout>
	)
}
