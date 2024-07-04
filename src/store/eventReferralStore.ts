import { create } from 'zustand'

export interface EventReferralState {
	code: string
}

export interface EventReferralAction {
	updateCode: (value: string) => void
}

export const useEventReferralStore = create<
	EventReferralState & EventReferralAction
>((set) => ({
	code: '',
	updateCode: (value) => set({ code: value }),
}))
