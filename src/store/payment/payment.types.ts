import { CheckoutResponse } from '../../services/payment/payment-service.types'

export interface PaymentState {
	checkoutData: CheckoutResponse | undefined
	coupon: {
		code: string
		isValid: boolean | undefined
	}
	discount: { price: number | undefined; percentage: number | undefined }
}

export interface PaymentAction {
	updateCheckoutData: (data: CheckoutResponse) => void
	updateCoupon: (key: string, value: string | boolean) => void
	updateDiscount: (
		price: number | undefined,
		percentage: number | undefined,
	) => void
	resetPaymentStore: () => void
}
