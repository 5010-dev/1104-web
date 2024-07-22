export type CheckCouponResponse = {
	id: number
	discount_price: string
	discount_percentage: string
}

export type PurchaseProductPayload = {
	id: number
}

export type PurchaseProductResponse = {
	id: number
	order_number: string
	total_price: string
	payment_status: string
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
