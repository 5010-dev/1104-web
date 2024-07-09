import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { MySubscriptionContainer } from './my-subscription.styles'

import SubscribtionList from './subscription-list/subscription-list.component'
import BillingList from './billing-list/billing-list.component'

export default function MySubscription() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<MySubscriptionContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">구독중인 서비스</h2>
				<SubscribtionList />
			</div>
			<hr />
			<div className="container-row">
				<h2 className="heading-2">결제 내역</h2>
				<BillingList />
			</div>
		</MySubscriptionContainer>
	)
}
