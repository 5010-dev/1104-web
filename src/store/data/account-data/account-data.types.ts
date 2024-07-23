import {
	PurchasesListItem,
	PurchasedListItem,
} from '../../../services/payment/payment-service.types'

export interface AccountDataState {
	purchasesList: {
		purchasesListData: PurchasesListItem[]
		isPurchasesListDataLoaded: boolean
	}
	purchasedList: {
		purchasedListData: PurchasedListItem[]
		isPurchasedListDataLoaded: boolean
	}
}

export interface AccounDataAction {
	updatePurchasesListData: (data: PurchasesListItem[]) => void
	updateIsPurchasesListDataLoaded: (value: boolean) => void
	resetPurchasesList: () => void

	updatePurchasedListData: (data: PurchasedListItem[]) => void
	updateIsPurchasedListDataLoaded: (value: boolean) => void
	resetPurchasedList: () => void
}
