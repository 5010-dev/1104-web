import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { usePreOrderContentsStore } from '../../../store/contents/pre-order-contents/pre-order-contents.store'
import useFadeIn from '../../../hooks/use-fade-in'

import { ReactComponent as QuantLogo } from '../../../assets/svg/quant/quant-logo.svg'
import backgroundImage from '../../../assets/img/pre-order-image.webp'

import { PreOrderRegisterContainer } from './pre-order-register.styles'

import Countdown from '../../../components/feature/countdown/countdown.component'
import PreOrderService from './pre-order-service/pre-order-service.component'
import PreOrderNotification from './pre-order-notification/pre-order-notification.component'
import PreOrderForm from './pre-order-form/pre-order-form.component'
import Footer from '../../../components/global/footer/footer.component'

export default function PreOrderRegister() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { launchingDate, title } = usePreOrderContentsStore()
	const { heading, subheading, eventName, affiliate, eventPeriod } = title

	const { ref, controls, fadeInVariants } = useFadeIn({ duration: 3 })

	const headingLetters = heading.split('')
	const subheadingLetters = subheading.split('')
	const eventNameLetters = eventName.split('')
	const eventPeriodLetters = eventPeriod.split('')

	const jointAffilitate = `5010 X ${affiliate}`
	const jointAffiliateLetters = jointAffilitate.split('')

	return (
		<PreOrderRegisterContainer
			$deviceType={deviceType}
			$imageUrl={backgroundImage}
		>
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
							<span className="quant-text-subheading">
								{subheadingLetters.map((letter, index) => (
									<span key={index} className="quant-text-letter">
										{letter}
									</span>
								))}
							</span>
							<span className="quant-text-caption" id="affiliate-text">
								{jointAffiliateLetters.map((letter, index) => (
									<span key={index} className="quant-text-letter">
										{letter}
									</span>
								))}
							</span>
							<span id="quant-text-display">
								{eventNameLetters.map((letter, index) => (
									<span key={index} className="quant-text-letter">
										{letter}
									</span>
								))}
							</span>
							<span className="quant-text-caption">
								{eventPeriodLetters.map((letter, index) => (
									<span key={index} className="quant-text-letter">
										{letter}
									</span>
								))}
							</span>
						</div>

						<p id="quant-text-body">이벤트 종료까지 남은 시간</p>
						<Countdown targetDate={launchingDate} />
						<FontAwesomeIcon icon={faAnglesDown} id="down-icon" />
					</div>
				</div>
			</motion.div>
			<PreOrderService />
			<PreOrderNotification />
			<PreOrderForm />
			<Footer />
		</PreOrderRegisterContainer>
	)
}
