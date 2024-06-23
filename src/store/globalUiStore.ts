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

// export interface BannerState {
// 	isBannerOn: boolean
// }

// export interface BannerAction {
// 	updateBanerVisibility: (value: boolean) => void
// }

export interface NavigationState {
	showNavigation: boolean
}

export interface NavigationAction {
	updateshowNavigation: (value: boolean) => void
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

// TODO: 추후 서비스 초기 세팅 자동화 시 다시 사용
// export const useBannerStore = create<BannerState & BannerAction>((set) => ({
// 	isBannerOn: false,
// 	updateBanerVisibility: (value) => set({ isBannerOn: value }),
// }))

export const useNavigationStore = create<NavigationState & NavigationAction>(
	(set) => ({
		showNavigation: true,
		updateshowNavigation: (value) => set({ showNavigation: value }),
	}),
)
