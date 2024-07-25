import { useRef, useEffect, useState, forwardRef } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useServiceDataStore } from '../../../store/data/service-data/service-data.store'

import { SubscriptionProps } from './subscription.types'
import { SubscriptionContainer } from './subscription.styles'

import SubscriptionItem from './subscription-item/subscription-item.component'

const Subscription = forwardRef<HTMLDivElement, SubscriptionProps>(
	(props, ref) => {
		const deviceType = useDeviceTypeStore((state) => state.deviceType)
		const { serviceList, isServiceListDataLoaded } = useServiceDataStore()
		const [isScrolling, setIsScrolling] = useState<boolean>(false)
		const scrollableDivRef = useRef<HTMLDivElement>(null)

		const checkScroll = () => {
			const scrollableDiv = scrollableDivRef.current
			if (scrollableDiv) {
				const hasScroll = scrollableDiv.scrollWidth > scrollableDiv.clientWidth
				if (hasScroll) setIsScrolling(true)
				else setIsScrolling(false)
			}
		}

		useEffect(() => {
			if (isServiceListDataLoaded) {
				const handleResize = () => checkScroll()

				window.addEventListener('resize', handleResize)
				checkScroll() // 초기 로드 시 스크롤 유무 확인

				return () => window.removeEventListener('resize', handleResize)
			}
		}, [isServiceListDataLoaded])

		return (
			<SubscriptionContainer
				$deviceType={deviceType}
				$isScrolling={isScrolling}
				ref={ref}
			>
				<div id="section-heading-container">
					<span id="section-category-text">SUBSCIPTION</span>
					<h1 id="section-heading">
						지금 바로 TEAM 5010의 서비스들을 만나보세요.
					</h1>
				</div>
				<div ref={scrollableDivRef} id="scrolling-container">
					<div id="items-container">
						{serviceList.map((item, index) => (
							<SubscriptionItem
								key={index}
								item={item}
								hierarchy={item.is_flagship ? 'primary' : 'secondary'}
							/>
						))}
					</div>
				</div>
			</SubscriptionContainer>
		)
	},
)

export default Subscription
