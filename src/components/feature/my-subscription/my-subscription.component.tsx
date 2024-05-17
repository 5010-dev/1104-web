import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { MySubscriptionContainer } from './my-subscription.styles'

import BillingItem from './billing-item/billing-item.component'

export default function MySubscription() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<MySubscriptionContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">구독중인 서비스</h2>
				<div className="item-row">
					<p className="body">구독중인 서비스가 없습니다.</p>
				</div>
			</div>
			<hr />
			<div className="container-row">
				<h2 className="heading-2">결제 내역</h2>
				<BillingItem
					date="2024-05-08 09:00"
					service="5010 매매전략 | DELUX"
					price={1250000}
				/>
				<BillingItem
					date="2024-05-08 09:00"
					service="5010 매매전략 | DELUX"
					price={1250000}
				/>
			</div>
		</MySubscriptionContainer>
	)
}
