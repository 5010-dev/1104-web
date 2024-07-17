import { MouseEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'
import useFadeIn from '../../../hooks/useFadeIn'

import { EventSuccessContainer } from './event-success.styles'

import Complete from '../../../components/global/complete/complete.component'
import Button from '../../../components/global/button/button.component'
import TextLink from '../../../components/global/text-link/text-link.component'

export default function EventSuccess() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const location = useLocation()
	const navigate = useNavigateWithScroll()
	const routeState = location.state?.mode

	const { ref, controls, fadeInVariants } = useFadeIn({ duration: 1 })

	const handleSignup = (e: MouseEvent<HTMLButtonElement>) =>
		window.open(
			'https://1104.kr/auth?state=signup&code=59420',
			'_blank',
			'noopener,noreferrer',
		)

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) =>
		navigate('/?details', { replace: true })

	const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '런칭 이벤트 참여 관련 문의 사항'
		const recipient = '5010.cs.kr@5010.tech'
		const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
			subject,
		)}`

		window.location.href = mailtoUrl
	}

	useEffect(() => {
		if (location.key === 'default') {
			navigate('/', { replace: true })
		}
	}, [navigate, location])

	return (
		<EventSuccessContainer $deviceType={deviceType}>
			{routeState === 'success' ? (
				<motion.div
					id="event-success-contents-container"
					ref={ref}
					variants={fadeInVariants}
					initial="hidden"
					animate={controls}
				>
					<Complete text="신청이 완료되었어요!" />
					<div id="event-success-text-container">
						<p className="event-success-body">
							아래 버튼을 통해 회원가입하고 5% 할인 혜택 받아가세요.
						</p>
						<p className="event-success-body">
							5% 추가 할인 쿠폰은 참여하신 이메일로 발송드릴 예정이니 메일함과
							스팸 메일함을 확인해 주세요.
						</p>
					</div>
					<div id="event-success-buttons-container">
						<Button
							accessibleName="event-success-contents-container"
							appearance="neutral"
							hierarchy="secondary"
							stroke="filled"
							shape="rounding"
							text="회원가입하고 혜택 받기 →"
							handleClick={handleSignup}
						/>
						<Button
							accessibleName="event-success-contents-container"
							appearance="neutral"
							hierarchy="secondary"
							stroke="outlined"
							shape="rounding"
							text="퀀트 솔루션 자세히 보기"
							handleClick={handleSeeDetails}
						/>
						<TextLink
							description="도움이 필요하시다면,"
							appearance="neutral"
							hierarchy="secondary"
							size="sm"
							underlined
							text="여기를 클릭해 주세요."
							handleClick={handleGetHelp}
						/>
					</div>
				</motion.div>
			) : null}
		</EventSuccessContainer>
	)
}
