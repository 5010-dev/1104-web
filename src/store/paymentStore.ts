import { create } from 'zustand'

export type PaymentStatus = 'idle' | 'processing' | 'success' | 'failure'

export interface PaymentState {
	status: PaymentStatus
	checkoutItem: {
		id: number | null
		coupon: {
			code: string
			isValid: boolean | undefined
		}
	}
}

export interface PaymentAction {
	updateStatus: (status: PaymentStatus) => void
	updateCheckoutItem: (key: string, value: number | string) => void
	updateCoupon: (key: string, value: string | boolean) => void
}

const initialState: PaymentState = {
	status: 'idle',
	checkoutItem: {
		id: null,
		coupon: {
			code: '',
			isValid: undefined,
		},
	},
}

export const usePaymentStore = create<PaymentState & PaymentAction>((set) => ({
	...initialState,
	updateStatus: (status: PaymentStatus) => {
		set((state) => ({ ...state, status: status }))
	},
	updateCheckoutItem: (key, value) =>
		set((state) => ({
			...state,
			checkoutItem: { ...state.checkoutItem, [key]: value },
		})),
	updateCoupon: (key, value) =>
		set((state) => ({
			...state,
			checkoutItem: {
				...state.checkoutItem,
				coupon: { ...state.checkoutItem.coupon, [key]: value },
			},
		})),
}))
