import { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useEventReferralStore } from '../../../store/eventReferralStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'
import useFadeIn from '../../../hooks/useFadeIn'

import { ReactComponent as QuantLogoSm } from '../../../assets/svg/quant/quant-logo-sm.svg'

import {
	PreOrderDetailsContainer,
	PreOrderDetialsGlobalStyle,
} from './pre-order-details.styles'

import PreOrderDetailsBody from './pre-order-details-body/pre-order-details-body.component'
import Button from '../../global/button/button.component'

export default function PreOrderDetails() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { code } = useEventReferralStore()
	const navigate = useNavigateWithScroll()

	const { ref, fadeInVariants, controls } = useFadeIn({ duration: 2 })

	const titleLeft = 'RENAISSANCE'
	const titleRight = 'QUANT SOLUTION'

	const titleLeftLetters = titleLeft.split('')
	const titleRightLetters = titleRight.split('')

	const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
		if (code.length !== 0) navigate(`/?register&code=${code}`)
		else navigate('/?register')
	}

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
						text="← 이벤트 참여하러 가기"
						handleClick={handleRegister}
					/>
				</div>
			</div>
		</PreOrderDetailsContainer>
	)
}
