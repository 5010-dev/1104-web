import { create } from 'zustand'

import { AccountDataState, AccounDataAction } from './account-data.types'

const initialState: AccountDataState = {
	purchasesList: {
		purchasesListData: [],
		isPurchasesListDataLoaded: false,
	},
	purchasedList: {
		purchasedListData: [],
		isPurchasedListDataLoaded: false,
	},
}

export const useAccountDataStore = create<AccountDataState & AccounDataAction>(
	(set) => ({
		...initialState,

		updatePurchasesListData: (data) =>
			set((state) => ({
				...state,
				purchasesList: { ...state.purchasesList, purchasesListData: data },
			})),
		updateIsPurchasesListDataLoaded: (value) =>
			set((state) => ({
				...state,
				purchasesList: {
					...state.purchasesList,
					isPurchasesListDataLoaded: value,
				},
			})),
		resetPurchasesList: () => set(initialState),

		updatePurchasedListData: (data) =>
			set((state) => ({
				...state,
				purchasedList: { ...state.purchasedList, purchasedListData: data },
			})),
		updateIsPurchasedListDataLoaded: (value) =>
			set((state) => ({
				...state,
				purchasedList: {
					...state.purchasedList,
					isPurchasedListDataLoaded: value,
				},
			})),
		resetPurchasedList: () => set(initialState),
	}),
)
