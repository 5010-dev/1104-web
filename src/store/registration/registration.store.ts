import { create } from 'zustand'

import {
	RegistrationState,
	RegistrationAction,
	RegistrationProgress,
} from './registration.types'

const getNextItem = (
	items: RegistrationProgress[],
	currentItem: RegistrationProgress,
): RegistrationProgress => {
	const currentIndex = items.indexOf(currentItem)
	if (currentIndex !== -1 && currentIndex < items.length - 1) {
		return items[currentIndex + 1]
	}
	return items[currentIndex]
}

const initialState: RegistrationState = {
	currentProgress: 'tradingviewIdInput',
	progress: [
		'tradingviewIdInput',
		'exchangeDataInput',
		'assetAmountSelect',
		'registrationComplete',
	],
}

export const useRegistrationStore = create<
	RegistrationState & RegistrationAction
>((set) => ({
	...initialState,
	progress: initialState.progress,
	proceedCurrentProgress: () =>
		set((state) => ({
			currentProgress: getNextItem(state.progress, state.currentProgress),
		})),
	updateCurrentProgress: (value: RegistrationProgress) =>
		set((state) => ({ ...state, currentProgress: value })),
	resetCurrentProgress: () =>
		set((state) => ({ currentProgress: initialState.currentProgress })),
}))
