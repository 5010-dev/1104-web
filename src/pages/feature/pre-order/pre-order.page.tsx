import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { ReactComponent as QuantLogo } from '../../../assets/svg/quant/quant-logo.svg'
import backgroundImage from '../../../assets/img/pre-order-image.webp'

import { PreOrderContainer } from './pre-order.styles'

export default function PreOrder() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const heading = 'QUANT SOLUTION'
	const subheading = '1104 R&I 퀀트 솔루션, 출시까지'

	const headingLetters = heading.split('')
	const subheadingLetters = subheading.split('')

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
							{/* {subheading} */}
							{subheadingLetters.map((letter, index) => (
								<span key={index} className="quant-text-letter">
									{letter}
								</span>
							))}
						</span>
					</div>

					<div id="quant-counter-container">
						<span
							id="quant-counter-days"
							className="quant-counter-num quant-counter"
						>
							00
						</span>
						<span className="quant-counter-separator quant-counter">:</span>
						<span
							id="quant-counter-hours"
							className="quant-counter-num quant-counter"
						>
							00
						</span>
						<span className="quant-counter-separator quant-counter">:</span>
						<span
							id="quant-counter-mins"
							className="quant-counter-num quant-counter"
						>
							00
						</span>
						<span className="quant-counter-separator quant-counter">:</span>
						<span
							id="quant-counter-seconds"
							className="quant-counter-num quant-counter"
						>
							00
						</span>
					</div>
				</div>
			</div>
		</PreOrderContainer>
	)
}
