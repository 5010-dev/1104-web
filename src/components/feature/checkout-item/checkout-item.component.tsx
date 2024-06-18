import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { CheckoutItemProps } from './checkout-item.types'
import { CheckoutItemContainer } from './checkout-item.styles'

export default function CheckoutItem(props: CheckoutItemProps) {
	const { item } = props
	const { name, plan, thumbnailImg, price, priceCaption } = item

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CheckoutItemContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">주문 상품</h2>
				<div className="item-row" id="subscribe-plan-container">
					<img src={thumbnailImg} alt="thumbnail-img" id="thumbnail-img" />
					<div id="item-text-container">
						<p className="body">
							{name} | {plan}
						</p>
						<span className="caption">디지털 상품 및 서비스</span>
						<h3 className="heading-3">
							최초 ₩{price.toLocaleString()} <span>({priceCaption})</span>
						</h3>
					</div>
				</div>
			</div>
		</CheckoutItemContainer>
	)
}
