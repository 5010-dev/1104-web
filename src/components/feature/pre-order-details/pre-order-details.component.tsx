import { MouseEvent } from 'react'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'
import useFadeIn from '../../../hooks/useFadeIn'

import { ReactComponent as QuantLogoSm } from '../../../assets/svg/quant/quant-logo-sm.svg'

import { PreOrderDetailsContainer } from './pre-order-details.styles'

import quantDetails_1 from '../../../assets/img/service-details/quant/Quant_1024_01_01_gif.gif'
import quantDetails_2 from '../../../assets/img/service-details/quant/Quant_1024_01_02_gif.gif'
import quantDetails_3 from '../../../assets/img/service-details/quant/Quant_1024_01_03_s_gif.gif'

import Card from '../../global/card/card.component'
import Button from '../../global/button/button.component'

export default function PreOrderDetails() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const { ref, fadeInVariants, controls } = useFadeIn({ duration: 2 })

	const titleLeft = 'RENAISSANCE'
	const titleRight = 'QUANT SOLUTION'

	const titleLeftLetters = titleLeft.split('')
	const titleRightLetters = titleRight.split('')

	const handleRegister = (e: MouseEvent<HTMLButtonElement>) =>
		navigate('/pre-order?register')

	return (
		<PreOrderDetailsContainer
			$deviceType={deviceType}
			as={motion.div}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
		>
			<div id="pre-order-details-contents-container">
				<div id="pre-order-details-title-container">
					<span className="title-span">
						{titleLeftLetters.map((letter, index) => (
							<span key={index} className="title-span-letter">
								{letter}
							</span>
						))}
					</span>
					<QuantLogoSm id="quant-logo" />
					<span className="title-span">
						{titleRightLetters.map((letter, index) => (
							<span key={index} className="title-span-letter">
								{letter}
							</span>
						))}
					</span>
				</div>
				<Card
					id="pre-order-details-card"
					hierarchy="secondary"
					shape="rounded1"
					opacity={1}
				>
					<h1 id="pre-order-details-heading">퀀트 솔루션 상세보기</h1>
					{/* TODO: 여기에 상세페이지 이미지 배치 */}
					<img
						src={quantDetails_1}
						alt="qunat-img-1"
						className="quant-details-img"
					/>
					<img
						src={quantDetails_2}
						alt="qunat-img-2"
						className="quant-details-img"
					/>
					<img
						src={quantDetails_3}
						alt="qunat-img-3"
						className="quant-details-img"
					/>
					<Button
						id="pre-order-to-register-button"
						accessibleName="pre-order-details-contents-container"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						text="← 사전예약 신청하러 가기"
						handleClick={handleRegister}
					/>
				</Card>
			</div>
		</PreOrderDetailsContainer>
	)
}
