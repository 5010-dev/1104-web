import { create } from 'zustand'

import { PaymentState, PaymentAction } from './payment.types'

const initialState: PaymentState = {
	checkoutData: undefined,
	coupon: {
		code: '',
		isValid: undefined,
	},
	discount: { price: undefined, percentage: undefined },
}

export const usePaymentStore = create<PaymentState & PaymentAction>((set) => ({
	...initialState,
	updateCheckoutData: (data) =>
		set((state) => ({ ...state, checkoutData: data })),
	updateCoupon: (key, value) =>
		set((state) => ({ ...state, coupon: { ...state.coupon, [key]: value } })),
	updateDiscount: (price, percentage) =>
		set((state) => ({
			...state,
			discount: { price: price, percentage: percentage },
		})),
	resetPaymentStore: () => set(initialState),
}))
