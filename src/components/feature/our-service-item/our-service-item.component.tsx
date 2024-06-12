import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { OurServiceItemProps } from './our-service-item.types'
import { OurServiceItemContainer } from './our-service-item.styles'

import Button from '../../global/button/button.component'

export default function OurServiceItem(props: OurServiceItemProps) {
	const { imageUrl, title, description, handleSeeDetails } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<OurServiceItemContainer $deviceType={deviceType} $imageUrl={imageUrl}>
			<div className="our-service-item-contents-container">
				<div className="our-service-item-text-container">
					<h3 className="our-service-item-title">{title}</h3>
					<p className="our-service-item-description">{description}</p>
				</div>
				<div className="our-service-item-buttons-container">
					<Button
						className="our-service-item-button"
						accessibleName="our-service-item-buttons-container"
						appearance="neutral"
						hierarchy="secondary"
						stroke="outlined"
						shape="rounding"
						text="서비스 자세히 보기 →"
						handleClick={handleSeeDetails}
					/>
				</div>
			</div>
		</OurServiceItemContainer>
	)
}
