import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import Button from '../../global/button/button.component'

import { ServiceContainer } from './service.styles'

export default function Service() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { items } = useContentsStore((state) => state.service)

	return (
		<ServiceContainer $deviceType={deviceType}>
			{items.map((item, index) => (
				<div key={index} className="item-container">
					<div className="image-container">
						<img
							src={item.imgUrl}
							alt={item.caption}
							className="service-image"
						/>
					</div>
					<div className="text-container">
						<span className="caption">{item.caption}</span>
						<h2 className="heading">{item.heading}</h2>
						<p className="body">{item.body}</p>
						<Button
							className="link-button"
							accessibleName="Link Button"
							text={item.buttonText}
							appearance="neutral"
							hierarchy="secondary"
							stroke="outlined"
							shape="rounding"
							size="sm"
						/>
					</div>
				</div>
			))}
		</ServiceContainer>
	)
}
