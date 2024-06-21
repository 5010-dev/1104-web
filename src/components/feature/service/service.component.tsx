import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useHomeContentsStore } from '../../../store/contents/homeContentsStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import Button from '../../global/button/button.component'

import { ServiceContainer } from './service.styles'

export default function Service() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { items } = useHomeContentsStore((state) => state.service)
	const navigate = useNavigateWithScroll()

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>, id: string) => {
		if (id === 'community') {
			window.open(
				'https://t.me/+wihj13Yb06U3YWM1',
				'_blank',
				'noopener,noreferrer',
			)
		} else {
			navigate(`${ROUTES.SERVICE_ITEM(id)}`)
		}
	}

	// const handleJoinCommunity

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
							handleClick={(e) => handleSeeDetails(e, item.title)}
						/>
					</div>
				</div>
			))}
		</ServiceContainer>
	)
}
