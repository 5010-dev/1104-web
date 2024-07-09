export type CheckCouponResponse = {
	id: number
	discount_price: string
	discount_percentage: string
}

export type CheckoutPayload = {
	id: number
	coupon?: string
}

export type CheckoutResponse = {
	number: string
	user_uuid: string
	user_email: string
	product_title: string
	total_price: string
}

export type ConfirmPaymentPayload = {
	payment_key: string
	order_number: string
	total_price: string
}

export type ConfirmPaymentResponse = {
	code: number
	pg_data: unknown // tosspayments PG data 객체
}

export type ProceedPaymentPayload = {
	number: string
	payment_key: string
	status: string
	pg_data: unknown // tosspayments PG data 객체
}

export type SubscribedItem = {
	id: number
	product: number // product ID
	product_title: string
	product_plan: string
	payment_status: string
	is_setup_completed: boolean
	started: string
	ended: string
}

export type PaidItem = {
	id: string
	product_title: string
	total_price: string
	status: string
	prepared_at: string
	failed_at: string
	paid_at: string
	partial_cancelled_at: string
	cancelled_at: string
}
