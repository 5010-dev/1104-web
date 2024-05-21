import { create } from 'zustand'

export interface ToastMessageState {
	toastMessgae: string
}

export interface ToastMessageAction {
	updateToastMessage: (value: string) => void
	resetToastMessage: () => void
}

export interface ScrollState {
	isSamePage: boolean
	isScrollToSubscription: boolean
}

export interface ScrollAction {
	updateScrollState: (key: keyof ScrollState, value: boolean) => void
	resetScrollState: () => void
}

export const useToastMessageStore = create<
	ToastMessageState & ToastMessageAction
>((set) => ({
	toastMessgae: '',
	updateToastMessage: (value) => set({ toastMessgae: value }),
	resetToastMessage: () => set({ toastMessgae: '' }),
}))

export const useScrollStore = create<ScrollState & ScrollAction>((set) => ({
	isSamePage: false,
	isScrollToSubscription: false,
	updateScrollState: (key, value) =>
		set((state) => ({ ...state, [key]: value })),
	resetScrollState: () =>
		set({ isSamePage: false, isScrollToSubscription: false }),
}))
