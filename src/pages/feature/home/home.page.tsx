import { useLayoutEffect, useRef } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useScrollStore } from '../../../store/globalUiStore'
import { useAuthDataStore } from '../../../store/authDataStore'

import Hero from '../../../components/feature/hero/hero.component'
import About from '../../../components/feature/about/about.component'
import Service from '../../../components/feature/service/service.component'
import Achievement from '../../../components/feature/achievement/achievement.component'
import Result from '../../../components/feature/result/result.component'
import Review from '../../../components/feature/review/review.component'
import Subscription from '../../../components/feature/subscription/subscription.component'
import FrequentQuestions from '../../../components/feature/frequent-questions/frequent-questions.component'
import Community from '../../../components/feature/community/community.component'
import RegistrationRequiredBanner from '../../../components/feature/registration-required-banner/registration-required-banner.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const ref = useRef<HTMLDivElement>(null)
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { isSamePage, isScrollToSubscription, resetScrollState } =
		useScrollStore()
	const { userId, tradingviewId } = useAuthDataStore((state) => state.loginUser)

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
			<Hero />
			<About />
			<Service />
			<div id="achievement-result-container">
				<Achievement />
				<Result />
				<Review />
			</div>
			<Subscription ref={ref} />
			<FrequentQuestions />
			<Community />

			{/* HACK: 결제 정보 받아와서 결제 했는지 여부도 조건으로 */}
			{userId && tradingviewId.length === 0 ? (
				<RegistrationRequiredBanner />
			) : null}
		</HomeContainer>
	)
}
