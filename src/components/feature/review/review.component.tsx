import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { ReviewItemProps } from './review.types'
import { ReviewContainer, ReviewItemContainer } from './review.styles'

const ReviewItem = (props: ReviewItemProps) => {
	const { name, body, platform } = props
	const numberOfStars = 5

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<ReviewItemContainer $deviceType={deviceType}>
			<div className="rating-container">
				{Array.from({ length: numberOfStars }, (_, index) => (
					<FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
				))}
			</div>
			<div className="name-container">
				<span className="name">{name}</span> {platform}
			</div>
			<p className="body">{body}</p>
		</ReviewItemContainer>
	)
}

export default function Review() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { items } = useContentsStore((state) => state.review)

	return (
		<ReviewContainer $deviceType={deviceType}>
			<div id="reviews-container">
				{items.map((item, index) => (
					<ReviewItem
						key={index}
						name={item.name}
						body={item.body}
						platform={item.platform}
					/>
				))}
			</div>
		</ReviewContainer>
	)
}
