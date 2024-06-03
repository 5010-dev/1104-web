import { create } from 'zustand'

export type RegistrationProgress = 'tradingviewIdInput' | 'exchangeDataInput'

export interface RegistrationState {
	currentProgress: RegistrationProgress
	progress: RegistrationProgress[]
}

export interface RegistrationAction {
	proceedCurrentProgress: () => void
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
	progress: ['tradingviewIdInput', 'exchangeDataInput'],
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
	resetCurrentProgress: () =>
		set((state) => ({ currentProgress: initialState.currentProgress })),
}))
