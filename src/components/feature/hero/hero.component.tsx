import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import Button from '../../global/button/button.component'

import { HeroContainer } from './hero.styles'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'

export default function Hero() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useContentsStore((state) => state.home)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<HeroContainer
			$deviceType={deviceType}
			$imageUrl={image.backgroundImage}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
		>
			<div id="text-container">
				<h1 id="display">{text.display}</h1>
				<h2 id="subheading">{text.subheading}</h2>
				<Button
					type="button"
					appearance="neutral"
					hierarchy="secondary"
					stroke="filled"
					shape="rounding"
					size="md"
					text={text.ctaButtonText}
					handleClick={() => console.log('button clicked')}
				/>
			</div>
			<img id="mockup-image" src={image.mockupImage} alt={image.mockupImage} />
		</HeroContainer>
	)
}
