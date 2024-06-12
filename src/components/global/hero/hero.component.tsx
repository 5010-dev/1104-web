// import Lottie from 'lottie-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
// import { useAboutUsContentsStore } from '../../../store/aboutUsContentsStore'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'

// import growAnim from '../../../assets/lottie/grow-anim.json'

import { HeroProps } from './hero.types'
import { HeroContainer } from './hero.styles'

export default function Hero(props: HeroProps) {
	const { id, className, image, heading, subheading } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<HeroContainer
			id={id}
			className={className}
			$deviceType={deviceType}
			$imageUrl={image}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
		>
			<div className="container-row" />
			{/* <Lottie animationData={growAnim} id="hero-anim" /> */}
			<div id="hero-text-container">
				<h1 id="heading">{heading}</h1>
				<span id="subheading">{subheading}</span>
			</div>
			<div className="container-row">
				<FontAwesomeIcon icon={faAnglesDown} id="down-icon" />
			</div>
		</HeroContainer>
	)
}
