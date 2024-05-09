import { useRef, useEffect, useCallback } from 'react'
import {
	motion,
	useMotionValue,
	useTransform,
	useMotionTemplate,
} from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { ReviewContainer } from './review.styles'

import ReviewItem from './review-item/review-item.component'

export default function Review() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { items } = useContentsStore((state) => state.review)

	const ref = useRef<HTMLDivElement>(null)
	const x = useMotionValue(0)
	const scrollX = useTransform(x, (value) => `${-value}px`)

	const handleScroll = useCallback(() => {
		if (ref.current) {
			const maxX = ref.current.scrollWidth / 2
			const newX = (x.get() + 1) % maxX
			x.set(newX)

			if (newX === 0) {
				x.set(maxX)
			}
		}
	}, [x])

	useEffect(() => {
		const timer = setInterval(() => {
			handleScroll()
		}, 16) // 60 FPS (1000 / 60 ≈ 16)

		return () => {
			clearInterval(timer)
		}
	}, [handleScroll])

	return (
		<ReviewContainer $deviceType={deviceType} as={motion.div} ref={ref}>
			<motion.div
				id="reviews-container"
				style={{ x: useMotionTemplate`${scrollX}` }}
			>
				{items.map((item, index) => (
					<ReviewItem
						key={index}
						name={item.name}
						body={item.body}
						platform={item.platform}
						className="review-item"
					/>
				))}
				{items.map((item, index) => (
					<ReviewItem
						key={index}
						name={item.name}
						body={item.body}
						platform={item.platform}
						className="review-item"
					/>
				))}
			</motion.div>
		</ReviewContainer>
	)
}
