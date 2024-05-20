import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { AboutUsContainer } from './about-us.styles'

import AboutUsHero from '../../../components/feature/about-us-hero/about-us-hero.component'
import BackgroundSection from '../../../components/feature/about-us-section/background-section/background-section.component'
import ObjectiveSection from '../../../components/feature/about-us-section/objective-section/objective-section.component'
import Community from '../../../components/feature/community/community.component'

export default function AboutUs() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<AboutUsContainer $deviceType={deviceType}>
			<AboutUsHero />
			<BackgroundSection />
			<ObjectiveSection />
			<Community />
		</AboutUsContainer>
	)
}
