import { create } from 'zustand'

// import { Service } from './serviceDataStore'

export interface PaymentState {
	checkoutItem: {
		id: number | null
		coupon: {
			code: string
			isValid: boolean | undefined
		}
		discount: number | undefined
	}
}

export interface PaymentAction {
	updateCheckoutItem: (key: string, value: number | string) => void
	updateCoupon: (key: string, value: string | boolean) => void
}

const initialState: PaymentState = {
	checkoutItem: {
		id: null,
		coupon: {
			code: '',
			isValid: undefined,
		},
		discount: undefined,
	},
}

export const usePaymentStore = create<PaymentState & PaymentAction>((set) => ({
	...initialState,

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
