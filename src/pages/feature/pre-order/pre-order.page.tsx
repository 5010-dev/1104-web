import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { ReactComponent as QuantLogo } from '../../../assets/svg/quant/quant-logo.svg'
import backgroundImage from '../../../assets/img/pre-order-image.webp'

import { PreOrderContainer } from './pre-order.styles'

import Countdown from '../../../components/feature/countdown/countdown.component'

export default function PreOrder() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const heading = 'QUANT SOLUTION'
	const subheading = '1104 R&I 퀀트 솔루션 | 2024. 07. 10. 출시'

	const headingLetters = heading.split('')
	const subheadingLetters = subheading.split('')

	const targetDate = new Date('2024-07-10T00:00:00Z')

	return (
		<PreOrderContainer $deviceType={deviceType} $imageUrl={backgroundImage}>
			<div id="quant-logo-section">
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
					<Countdown targetDate={targetDate} />
				</div>
			</div>
		</PreOrderContainer>
	)
}
