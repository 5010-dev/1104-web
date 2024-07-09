import { create } from 'zustand'

import { AccountDataState, AccounDataAction } from './account-data.types'

const initialState: AccountDataState = {
	subscribedItem: {
		subscribedItemData: [],
		isSubscribedItemDataLoaded: false,
	},
	paidItem: {
		paidItemData: [],
		isPaidItemDataLoaded: false,
	},
}

export const useAccountDataStore = create<AccountDataState & AccounDataAction>(
	(set) => ({
		...initialState,

		updateSubscribedItemData: (data) =>
			set((state) => ({
				...state,
				subscribedItem: { ...state.subscribedItem, subscribedItemData: data },
			})),
		updateIsSubscribedItemDataLoaded: (value) =>
			set((state) => ({
				...state,
				subscribedItem: {
					...state.subscribedItem,
					isSubscribedItemDataLoaded: value,
				},
			})),
		resetSubscribedItem: () => set(initialState),

		updatePaidItemData: (data) =>
			set((state) => ({
				...state,
				paidItem: { ...state.paidItem, paidItemData: data },
			})),
		updateIsPaidItemDataLoaded: (value) =>
			set((state) => ({
				...state,
				paidItem: {
					...state.paidItem,
					isPaidItemDataLoaded: value,
				},
			})),
		resetPaidItem: () => set(initialState),
	}),
)
