import { useRef, useEffect, useState, forwardRef } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useServiceDataStore } from '../../../store/serviceDataStore'

import { SubscriptionProps } from './subscription.types'
import { SubscriptionContainer } from './subscription.styles'

import SubscriptionItem from './subscription-item/subscription-item.component'

const Subscription = forwardRef<HTMLDivElement, SubscriptionProps>(
	(props, ref) => {
		const deviceType = useDeviceTypeStore((state) => state.deviceType)
		const { service } = useServiceDataStore()
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
			const handleResize = () => checkScroll()

			window.addEventListener('resize', handleResize)
			checkScroll() // 초기 로드 시 스크롤 유무 확인

			return () => window.removeEventListener('resize', handleResize)
		}, [])

		return (
			<SubscriptionContainer
				$deviceType={deviceType}
				$isScrolling={isScrolling}
				ref={ref}
			>
				<div ref={scrollableDivRef} id="scrolling-container">
					<div id="items-container">
						{service.map((item, index) => (
							<SubscriptionItem
								key={index}
								item={item}
								hierarchy={item.isFlagship ? 'primary' : 'secondary'}
							/>
						))}
					</div>
				</div>
			</SubscriptionContainer>
		)
	},
)

export default Subscription
