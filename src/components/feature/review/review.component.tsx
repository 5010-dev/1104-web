import { motion, useMotionTemplate } from 'framer-motion'
import { useScrollAnimation } from '../../../hooks/useScrollAnimation'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { ReviewContainer } from './review.styles'

import ReviewItem from './review-item/review-item.component'
import Button from '../../global/button/button.component'

export default function Review() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { items } = useContentsStore((state) => state.review)
	const { ref, scrollX, handleMouseEnter, handleMouseLeave } =
		useScrollAnimation(true)

	return (
		<ReviewContainer $deviceType={deviceType} as={motion.div} ref={ref}>
			<motion.div
				id="reviews-container"
				style={{ x: useMotionTemplate`${scrollX}` }}
				onMouseEnter={deviceType === 'mobile' ? undefined : handleMouseEnter}
				onMouseLeave={deviceType === 'mobile' ? undefined : handleMouseLeave}
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
					// 무한 스크롤링 애니메이션을 위해 배열 복제
					<ReviewItem
						key={index}
						name={item.name}
						body={item.body}
						platform={item.platform}
						className="review-item"
					/>
				))}
			</motion.div>
			<div id="button-container">
				<Button
					text="성과 및 결과 더 보기 →"
					appearance="neutral"
					hierarchy="primary"
					stroke="outlined"
					shape="rounding"
				/>
			</div>
		</ReviewContainer>
	)
}
