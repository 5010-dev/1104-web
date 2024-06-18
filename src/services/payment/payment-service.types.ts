export type Product = {
	id: number
	title: string
	price: string
	subscription_price: string
	description: string
}

export type CheckoutPayload = {
	id: number
	coupon?: string
}

export type CheckoutResponse = {
	product_id: number
	coupon_id: number
	number: string
	total_price: string
	status: string
	created: string
}
