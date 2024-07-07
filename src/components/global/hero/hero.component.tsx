import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'

import { HeroProps } from './hero.types'
import { HeroContainer } from './hero.styles'

export default function Hero(props: HeroProps) {
	const {
		id,
		className,
		image,
		category,
		heading,
		subheading,
		fullScreen = true,
		showArrow = true,
		bodyContents,
		shadeOpacity = [0.15, 0.2, 1],
	} = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<HeroContainer
			id={id}
			className={className}
			$deviceType={deviceType}
			$imageUrl={image}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
			$fullScreen={fullScreen}
			$shadeOpacity={shadeOpacity}
		>
			<div className="container-row" />
			<div id="hero-contents-container">
				<div id="hero-text-container">
					<span id="category">{category}</span>
					<h1 id="heading">{heading}</h1>
					<span id="subheading">{subheading}</span>
				</div>
				{bodyContents ? bodyContents : null}
			</div>
			<div className="container-row">
				{showArrow ? (
					<FontAwesomeIcon icon={faAnglesDown} id="down-icon" />
				) : null}
			</div>
		</HeroContainer>
	)
}
