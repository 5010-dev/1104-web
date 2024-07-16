import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'

import { CheckoutBillingProps } from './checkout-billing.types'
import { CheckoutBillingContainer } from './checkout-billing.styles'

import Chip from '../../global/chip/chip.component'

// TODO: 퍼센트 할인 외에 절대가격 할인도 적용해야함
export default function CheckoutBilling(props: CheckoutBillingProps) {
	const { item, discount } = props
	const { price } = item
	const numberedPrice = Number(price)

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { first_purchase_discount_percentage } = useAuthDataStore(
		(state) => state.loginUser,
	)

	const calcDiscountPrice = (discount: number, price: number): number =>
		price * (discount / 100)

	return (
		<CheckoutBillingContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">결제 금액</h2>
				<div className="item-row">
					<span className="price-label">상품 금액</span>
					<p className="body">₩{numberedPrice.toLocaleString()}</p>
				</div>
				<div className="item-row">
					<span className="price-label">할인 금액</span>
					<div className="price-body-container">
						{discount ? (
							<Chip
								appearance="neutral"
								hierarchy="secondary"
								stroke="filled"
								shape="rounded3"
								text={`${Math.floor(discount)}% OFF`}
							/>
						) : null}
						<p className="body">
							- ₩
							{(discount
								? calcDiscountPrice(discount, numberedPrice)
								: 0
							).toLocaleString()}
						</p>
					</div>
				</div>
				{first_purchase_discount_percentage ? (
					<div className="item-row">
						<span className="price-label">첫구매 할인 금액</span>
						<div className="price-body-container">
							{discount ? (
								<Chip
									appearance="neutral"
									hierarchy="secondary"
									stroke="filled"
									shape="rounded3"
									text={`${Math.floor(discount)}% OFF`}
								/>
							) : null}
							<p className="body">
								- ₩
								{(discount
									? calcDiscountPrice(discount, numberedPrice)
									: 0
								).toLocaleString()}
							</p>
						</div>
					</div>
				) : null}
			</div>
			<hr />
			<div className="container-row" id="billing-price-container">
				<div className="item-row">
					<span className="price-label" id="billing-price-label">
						총 결제 금액
					</span>
					<h3 className="heading-3" id="billing-price-text">
						₩
						{(discount
							? numberedPrice - calcDiscountPrice(discount, numberedPrice)
							: numberedPrice
						).toLocaleString()}
					</h3>
				</div>
				<span id="caption">VAT 10% 포함</span>
			</div>
		</CheckoutBillingContainer>
	)
}
