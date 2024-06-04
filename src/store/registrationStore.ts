import { create } from 'zustand'

export type RegistrationProgress =
	| 'tradingviewIdInput'
	| 'exchangeDataInput'
	| 'assetAmountSelect'
	| 'registrationComplete'

export interface RegistrationState {
	currentProgress: RegistrationProgress
	progress: RegistrationProgress[]
}

export interface RegistrationAction {
	proceedCurrentProgress: () => void
	updateCurrentProgress: (value: RegistrationProgress) => void
	resetCurrentProgress: () => void
}

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
