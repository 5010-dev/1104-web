import { MouseEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ROUTES } from '../../../../routes/routes'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../../hooks/use-navigate-with-scroll'
import useFadeIn from '../../../../hooks/use-fade-in'

import { EventSuccessContainer } from './event-success.styles'

import Complete from '../../../../components/global/complete/complete.component'
import Button from '../../../../components/global/button/button.component'
import TextLink from '../../../../components/global/text-link/text-link.component'

export default function EventSuccess() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const location = useLocation()
	const navigate = useNavigateWithScroll()
	// const routeState = location.state?.mode

	const { ref, controls, fadeInVariants } = useFadeIn({ duration: 1 })

	const handleSignup = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(`${ROUTES.AUTH}?state=signup`)
	}

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.SERVICE_ITEM.createPath(3), { replace: true })

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
			{/* {routeState === 'success' ? ( */}
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
						신청하신 이메일로 이벤트 상세 정보를 보내드렸어요. 메일함이나
						스팸메일함을 꼼꼼히 살펴주세요.
					</p>
					<p className="event-success-body">
						이제 아래 버튼을 통해 회원가입하고 서비스를 구매하시면 바로 10%
						할인을 적용받을 수 있어요!
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
			{/* ) : null} */}
		</EventSuccessContainer>
	)
}
