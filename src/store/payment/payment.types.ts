// import { CheckoutResponse } from '../../services/payment/payment-service.types'

type CheckoutData = {
	data: { name: string; tel: string }
	isValid: {
		name: boolean
		tel: boolean
	}
}

export interface PaymentState {
	checkoutData: CheckoutData
	coupon: {
		code: string
		isValid: boolean | undefined
	}
	discount: { price: number | undefined; percentage: number | undefined }
}

export interface PaymentAction {
	updateCheckoutData: (key: string, value: string) => void
	updateCheckoutDataValidity: (key: string, value: boolean) => void
	updateCoupon: (key: string, value: string | boolean) => void
	updateDiscount: (
		price: number | undefined,
		percentage: number | undefined,
	) => void
	resetPaymentStore: () => void
}
