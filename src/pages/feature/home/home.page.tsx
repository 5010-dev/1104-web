import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useNavigationStore } from '../../../store/globalUiStore'

import Hero from '../../../components/feature/hero/hero.component'
import About from '../../../components/feature/about/about.component'
import Service from '../../../components/feature/service/service.component'
import Achievement from '../../../components/feature/achievement/achievement.component'
import Result from '../../../components/feature/result/result.component'
import Review from '../../../components/feature/review/review.component'
import Community from '../../../components/feature/community/community.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateIsMenuOpen } = useNavigationStore()

	useEffect(() => {
		updateIsMenuOpen(false)
	}, [updateIsMenuOpen])

	return (
		<HomeContainer $deviceType={deviceType}>
			<Hero />
			<About />
			<Service />
			<div id="achievement-result-container">
				<Achievement />
				<Result />
				<Review />
			</div>
			<Community />
		</HomeContainer>
	)
}
