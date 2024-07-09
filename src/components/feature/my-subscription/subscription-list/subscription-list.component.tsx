import { useAccountDataStore } from '../../../../store/data/account-data/account-data.store'

import { SubscriptionListContainer } from './subscription-list.styles'

import WarningText from '../../warning-text/warning-text.component'
import SubscribedItem from './subscribed-item/subscribed-item.component'

export default function SubscribtionList() {
	const { subscribedItemData, isSubscribedItemDataLoaded } =
		useAccountDataStore((state) => state.subscribedItem)

	if (!isSubscribedItemDataLoaded) {
		return (
			<WarningText message="오류가 발생했습니다. 새로고침 하시거나, 잠시 뒤 다시 시도해 주세요." />
		)
	}

	return (
		<SubscriptionListContainer>
			{subscribedItemData.length === 0 ? (
				<p id="subscription-list-body">구독중인 서비스가 없습니다.</p>
			) : (
				subscribedItemData.map((item, index) => (
					<SubscribedItem key={index} item={item} />
				))
			)}
		</SubscriptionListContainer>
	)
}
