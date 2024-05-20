import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { AboutUsContainer } from './about-us.styles'

import AboutUsHero from '../../../components/feature/about-us-hero/about-us-hero.component'
import BackgroundSection from '../../../components/feature/background-section/background-section.component'

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
		</AboutUsContainer>
	)
}
