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
