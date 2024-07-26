import { useLayoutEffect, useRef, useState } from 'react'

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
import WhitePaperBanner from '../../../components/feature/white-paper-banner/white-paper-banner.component'
import EventBanner from '../../../components/feature/event-banner/event-banner.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const ref = useRef<HTMLDivElement>(null)
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { isSamePage, isScrollToSubscription, resetScrollState } =
		useScrollStore()

	const [isBannerOn, setIsBannerOn] = useState<boolean>(true)

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
			{isBannerOn ? (
				<EventBanner
					variants="modal"
					handleClose={() => setIsBannerOn(false)}
				/>
			) : null}
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
			<div id="banners-container">
				<WhitePaperBanner />
				<Community />
			</div>
		</HomeContainer>
	)
}
