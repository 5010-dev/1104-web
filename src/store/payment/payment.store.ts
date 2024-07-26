import { create } from 'zustand'

import { PaymentState, PaymentAction } from './payment.types'

const initialState: PaymentState = {
	checkoutData: {
		data: {
			name: '',
			tel: '',
		},
		isValid: {
			name: false,
			tel: false,
		},
	},
	coupon: {
		code: '',
		isValid: undefined,
	},
	discount: { price: undefined, percentage: undefined },
}

export const usePaymentStore = create<PaymentState & PaymentAction>((set) => ({
	...initialState,
	updateCheckoutData: (key, value) =>
		set((state) => ({
			...state,
			checkoutData: {
				...state.checkoutData,
				data: { ...state.checkoutData.data, [key]: value },
			},
		})),
	updateCheckoutDataValidity: (key, value) =>
		set((state) => ({
			...state,
			checkoutData: {
				...state.checkoutData,
				isValid: { ...state.checkoutData.isValid, [key]: value },
			},
		})),
	updateCoupon: (key, value) =>
		set((state) => ({ ...state, coupon: { ...state.coupon, [key]: value } })),
	updateDiscount: (price, percentage) =>
		set((state) => ({
			...state,
			discount: { price: price, percentage: percentage },
		})),
	resetPaymentStore: () => set(initialState),
}))
