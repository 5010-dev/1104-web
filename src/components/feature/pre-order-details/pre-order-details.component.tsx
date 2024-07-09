import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'
import useFadeIn from '../../../hooks/use-fade-in'

import { ReactComponent as QuantLogoSm } from '../../../assets/svg/quant/quant-logo-sm.svg'

import {
	PreOrderDetailsContainer,
	PreOrderDetialsGlobalStyle,
} from './pre-order-details.styles'

import PreOrderDetailsBody from './pre-order-details-body/pre-order-details-body.component'
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
		navigate(`${ROUTES.PRE_ORDER}?register`)

	return (
		<PreOrderDetailsContainer
			$deviceType={deviceType}
			as={motion.div}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
		>
			<Helmet>
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<PreOrderDetialsGlobalStyle />
			<div id="pre-order-details-contents-container">
				<div id="pre-order-details-title-container">
					<span className="title-span" id="left-title-span">
						{titleLeftLetters.map((letter, index) => (
							<span key={index} className="title-span-letter">
								{letter}
							</span>
						))}
					</span>
					<QuantLogoSm id="quant-logo" />
					<span className="title-span" id="right-title-span">
						{titleRightLetters.map((letter, index) => (
							<span key={index} className="title-span-letter">
								{letter}
							</span>
						))}
					</span>
				</div>
				<PreOrderDetailsBody />
				<div id="pre-order-details-bottom-bar">
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
				</div>
			</div>
		</PreOrderDetailsContainer>
	)
}
