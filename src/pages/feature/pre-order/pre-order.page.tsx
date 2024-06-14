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
				<div id="quant-logo-container">
					<QuantLogo id="quant-logo" />
					<div id="quant-text-container">
						<h1 id="quant-text-heading">
							{headingLetters.map((letter, index) => (
								<span key={index}>{letter}</span>
							))}
						</h1>
						<span id="quant-text-subheading">
							{subheadingLetters.map((letter, index) => (
								<span key={index}>{letter}</span>
							))}
						</span>
					</div>
				</div>
			</div>
		</PreOrderContainer>
	)
}
