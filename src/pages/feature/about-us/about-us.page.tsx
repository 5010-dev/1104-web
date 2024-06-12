import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAboutUsContentsStore } from '../../../store/aboutUsContentsStore'

import { AboutUsContainer } from './about-us.styles'

import Hero from '../../../components/global/hero/hero.component'
import BackgroundSection from '../../../components/feature/about-us-section/background-section/background-section.component'
import ObjectiveSection from '../../../components/feature/about-us-section/objective-section/objective-section.component'
import Community from '../../../components/feature/community/community.component'

export default function AboutUs() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useAboutUsContentsStore((state) => state.hero)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<AboutUsContainer $deviceType={deviceType}>
			<Hero
				image={image}
				category={text.category}
				heading={text.heading}
				subheading={text.subheading}
			/>
			<BackgroundSection />
			<ObjectiveSection />
			<Community />
		</AboutUsContainer>
	)
}
