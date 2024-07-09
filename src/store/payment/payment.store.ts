import { create } from 'zustand'

import { PaymentState, PaymentAction } from './payment.types'

const initialState: PaymentState = {
	checkoutData: undefined,
	coupon: {
		code: '',
		isValid: undefined,
	},
	discount: undefined,
}

export const usePaymentStore = create<PaymentState & PaymentAction>((set) => ({
	...initialState,
	updateCheckoutData: (data) =>
		set((state) => ({ ...state, checkoutData: data })),
	updateCoupon: (key, value) =>
		set((state) => ({ ...state, coupon: { ...state.coupon, [key]: value } })),
	updateDiscount: (value) => set((state) => ({ ...state, discount: value })),
	resetPaymentStore: () => set(initialState),
}))
