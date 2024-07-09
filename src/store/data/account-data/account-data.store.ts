import { create } from 'zustand'

import { AccountDataState, AccounDataAction } from './account-data.types'

const initialState: AccountDataState = {
	subscribedItem: {
		subscribedItemData: [],
		isSubscribedItemDataLoaded: false,
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
	}),
)
