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
	id: number
	product_title: string
	product_plan: string
	total_price: string
	receipt_url: string
	status: string
	done_at: string | null
	cancelled_at: string | null
}
