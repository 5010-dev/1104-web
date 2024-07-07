import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { CheckoutItemProps } from './checkout-item.types'
import { CheckoutItemContainer } from './checkout-item.styles'

export default function CheckoutItem(props: CheckoutItemProps) {
	const { item } = props
	const { title, plan, thumbnail_image_url, price, price_caption } = item
	const numberedPrice = Number(price)

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CheckoutItemContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">주문 상품</h2>
				<div className="item-row" id="subscribe-plan-container">
					<img
						src={thumbnail_image_url}
						alt="thumbnail-img"
						id="thumbnail-img"
					/>
					<div id="item-text-container">
						<p className="body">
							{title} | {plan}
						</p>
						<span className="caption">디지털 상품 및 서비스</span>
						<h3 className="heading-3">
							₩{numberedPrice.toLocaleString()} <span>({price_caption})</span>
						</h3>
					</div>
				</div>
			</div>
		</CheckoutItemContainer>
	)
}
