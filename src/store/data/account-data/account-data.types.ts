import { SubscribedItem } from '../../../services/payment/payment-service.types'

export interface AccountDataState {
	subscribedItem: {
		subscribedItemData: SubscribedItem[]
		isSubscribedItemDataLoaded: boolean
	}
}

export interface AccounDataAction {
	updateSubscribedItemData: (data: SubscribedItem[]) => void
	updateIsSubscribedItemDataLoaded: (value: boolean) => void
	resetSubscribedItem: () => void
}
