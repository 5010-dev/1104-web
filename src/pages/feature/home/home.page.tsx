import { useLayoutEffect, useRef } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useScrollStore } from '../../../store/layout/global-ui.store'

import HomeHero from '../../../components/feature/home-hero/home-hero.component'
import About from '../../../components/feature/about/about.component'
import Service from '../../../components/feature/service/service.component'
import Achievement from '../../../components/feature/achievement/achievement.component'
import Result from '../../../components/feature/result/result.component'
import Review from '../../../components/feature/review/review.component'
import Subscription from '../../../components/feature/subscription/subscription.component'
import FrequentQuestions from '../../../components/feature/frequent-questions/frequent-questions.component'
import Community from '../../../components/feature/community/community.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const ref = useRef<HTMLDivElement>(null)
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { isSamePage, isScrollToSubscription, resetScrollState } =
		useScrollStore()

	useLayoutEffect(() => {
		if (isScrollToSubscription) {
			setTimeout(() => {
				ref.current?.scrollIntoView({
					behavior: isSamePage ? 'smooth' : 'auto',
					block: 'center',
				})
				resetScrollState()
			}, 100)
		}
	}, [isSamePage, isScrollToSubscription, resetScrollState])

	return (
		<HomeContainer $deviceType={deviceType}>
			<HomeHero />
			<About />
			<Service />
			<div id="achievement-result-container">
				<Achievement />
				<Result />
				<Review />
			</div>
			<Subscription ref={ref} />
			<FrequentQuestions variant="INDICATOR" showTabs />
			<Community />
		</HomeContainer>
	)
}
