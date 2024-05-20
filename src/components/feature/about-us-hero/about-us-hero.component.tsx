import Lottie from 'lottie-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAboutUsContentsStore } from '../../../store/aboutUsContentsStore'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'

import growAnim from '../../../assets/lottie/grow-anim.json'

import { AboutUsHeroContainer } from './about-us-hero.styles'

export default function AboutUsHero() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useAboutUsContentsStore((state) => state.hero)
	const { heading, subheading } = text
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<AboutUsHeroContainer
			$deviceType={deviceType}
			$imageUrl={image}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
		>
			<div className="container-row" />
			<Lottie animationData={growAnim} id="hero-anim" />
			<div id="hero-text-container">
				<h1 id="heading">{heading}</h1>
				<h3 id="subheading">{subheading}</h3>
			</div>
			<div className="container-row">
				<FontAwesomeIcon icon={faAnglesDown} id="down-icon" />
			</div>
		</AboutUsHeroContainer>
	)
}
