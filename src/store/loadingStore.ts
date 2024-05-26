import { create } from 'zustand'

export interface loadingState {
	isLoading: boolean
}

export interface loadingAction {
	updateIsLoading: (value: boolean) => void
}

export const useLoadingStore = create<loadingState & loadingAction>((set) => ({
	isLoading: false,
	updateIsLoading: (value: boolean) => {
		set({ isLoading: value })
	},
}))
