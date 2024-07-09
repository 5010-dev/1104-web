import {
	SubscribedItem,
	PaidItem,
} from '../../../services/payment/payment-service.types'

export interface AccountDataState {
	subscribedItem: {
		subscribedItemData: SubscribedItem[]
		isSubscribedItemDataLoaded: boolean
	}
	paidItem: {
		paidItemData: PaidItem[]
		isPaidItemDataLoaded: boolean
	}
}

export interface AccounDataAction {
	updateSubscribedItemData: (data: SubscribedItem[]) => void
	updateIsSubscribedItemDataLoaded: (value: boolean) => void
	resetSubscribedItem: () => void

	updatePaidItemData: (data: PaidItem[]) => void
	updateIsPaidItemDataLoaded: (value: boolean) => void
	resetPaidItem: () => void
}
