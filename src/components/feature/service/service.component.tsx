import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useHomeContentsStore } from '../../../store/contents/homeContentsStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { ServiceContainer } from './service.styles'

import Button from '../../global/button/button.component'

export default function Service() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { items } = useHomeContentsStore((state) => state.service)
	const navigate = useNavigateWithScroll()

	const handleSeeDetails = (
		e: MouseEvent<HTMLButtonElement>,
		id: number | null,
	) => {
		if (id === null) {
			window.open(
				'https://t.me/+wihj13Yb06U3YWM1',
				'_blank',
				'noopener,noreferrer',
			)
		} else if (id === 0) {
			// HACK: 5010 매매 전략 D2C 판매 준비 전까지
			window.open(
				'https://kmong.com/gig/455172',
				'_blank',
				'noopener,noreferrer',
			)
		} else {
			navigate(`${ROUTES.SERVICE_ITEM.createPath(id)}`)
		}
	}

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
							handleClick={(e) => handleSeeDetails(e, item.id)}
						/>
					</div>
				</div>
			))}
		</ServiceContainer>
	)
}
