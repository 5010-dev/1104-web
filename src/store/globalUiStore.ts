import { create } from 'zustand'

export interface ToastMessageState {
	toastMessgae: string
}

export interface NavigationState {
	isMenuOpen: boolean
	isScrolled: boolean
}

export interface ToastMessageAction {
	updateToastMessage: (value: string) => void
	resetToastMessage: () => void
}

export interface NavigationAction {
	updateIsMenuOpen: (value: boolean) => void
	updateIsScrolled: (value: boolean) => void
}

export const useToastMessageStore = create<
	ToastMessageState & ToastMessageAction
>((set) => ({
	toastMessgae: '',
	updateToastMessage: (value) => set({ toastMessgae: value }),
	resetToastMessage: () => set({ toastMessgae: '' }),
}))

export const useNavigationStore = create<NavigationState & NavigationAction>(
	(set) => ({
		isMenuOpen: false,
		isScrolled: false,
		updateIsMenuOpen: (value) =>
			set((state) => ({ ...state, isMenuOpen: value })),
		updateIsScrolled: (value) =>
			set((state) => ({ ...state, isScrolled: value })),
	}),
)
