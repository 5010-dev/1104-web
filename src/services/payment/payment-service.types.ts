export type Product = {
	id: number
	title: string
	price: string
	subscription_price: string
	description: string
}

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
	product: number
	coupon_id: number
	number: string
	total_price: string
	status: string
	created: string
}

export type SubscribedItem = {
	id: number
	product: number
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
