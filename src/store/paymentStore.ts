import { create } from 'zustand'

export type PaymentStatus = 'idle' | 'processing' | 'success' | 'failure'

export interface PaymentState {
	status: PaymentStatus
}

export interface PaymentAction {
	updateStatus: (status: PaymentStatus) => void
}

export const usePaymentStore = create<PaymentState & PaymentAction>((set) => ({
	status: 'idle',
	updateStatus: (status: PaymentStatus) => {
		set({ status })
	},
}))
