import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { usePreOrderContentsStore } from '../../../store/contents/preOrderContentsStore'
import useFadeIn from '../../../hooks/useFadeIn'

import { ReactComponent as QuantLogo } from '../../../assets/svg/quant/quant-logo.svg'
import backgroundImage from '../../../assets/img/pre-order-image.webp'

import { PreOrderContainer } from './pre-order.styles'

import Countdown from '../../../components/feature/countdown/countdown.component'
import PreOrderForm from '../../../components/feature/pre-order-form/pre-order-form.component'
import PreOrderDetails from '../../../components/feature/pre-order-details/pre-order-details.component'
import Footer from '../../../components/global/footer/footer.component'

export default function PreOrder() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { launchingDate, title } = usePreOrderContentsStore()
	const { heading, subheading } = title

	const { ref, controls, fadeInVariants } = useFadeIn({ duration: 3 })

	const headingLetters = heading.split('')
	const subheadingLetters = subheading.split('')

	return (
		<PreOrderContainer $deviceType={deviceType} $imageUrl={backgroundImage}>
			<motion.div
				id="quant-logo-section"
				ref={ref}
				variants={fadeInVariants}
				initial="hidden"
				animate={controls}
			>
				<div id="quant-logo-section-contents-container">
					<QuantLogo id="quant-logo" />
					<div id="quant-text-counter-container">
						<div id="quant-text-container">
							<h1 id="quant-text-heading">
								{headingLetters.map((letter, index) => (
									<span key={index} className="quant-text-letter">
										{letter}
									</span>
								))}
							</h1>
							<span id="quant-text-subheading">
								{subheadingLetters.map((letter, index) => (
									<span key={index} className="quant-text-letter">
										{letter}
									</span>
								))}
							</span>
						</div>
						<Countdown targetDate={launchingDate} />
						<FontAwesomeIcon icon={faAnglesDown} id="down-icon" />
					</div>
				</div>
			</motion.div>
			<PreOrderForm />
			<PreOrderDetails />
			<Footer />
		</PreOrderContainer>
	)
}
