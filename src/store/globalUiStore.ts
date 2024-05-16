import { create } from 'zustand'

export interface ToastMessageState {
	toastMessgae: string
}

export interface ToastMessageAction {
	updateToastMessage: (value: string) => void
	resetToastMessage: () => void
}

export const useToastMessageStore = create<
	ToastMessageState & ToastMessageAction
>((set) => ({
	toastMessgae: '',
	updateToastMessage: (value) => set({ toastMessgae: value }),
	resetToastMessage: () => set({ toastMessgae: '' }),
}))
