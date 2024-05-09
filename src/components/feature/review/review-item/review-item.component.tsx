import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'

import { ReviewItemProps } from '../review.types'
import { ReviewItemContainer } from './review-item.styles'

import Chip from '../../../global/chip/chip.component'

export default function ReviewItem(props: ReviewItemProps) {
	const { name, body, platform, id, className } = props
	const numberOfStars = 5

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<ReviewItemContainer $deviceType={deviceType} id={id} className={className}>
			<div className="first-row">
				<div className="rating-container">
					{Array.from({ length: numberOfStars }, (_, index) => (
						<FontAwesomeIcon key={index} icon={faStar} className="star-icon" />
					))}
				</div>
				<div className="name-container">
					<span className="name">{name}</span>
					<Chip
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounded3"
						size="sm"
						text={platform}
					/>
				</div>
			</div>
			<p className="body">{body}</p>
		</ReviewItemContainer>
	)
}
