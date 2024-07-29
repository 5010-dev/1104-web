export type CheckCouponResponse = {
	id: number
	discount_price: string
	discount_percentage: string
}

export type PurchaseProductPayload = {
	id: number
	phone: string
	username: string
}

export type PurchaseProductResponse = {
	id: number
	order_number: string
	total_price: string
	payment_status: string
}

type PurchasedProduct = {
	id: number
	plan: string
	price: string
	title: string
	sub_title: string
	subscription_price: string
}

export type PaymentStatus =
	| 'PENDING'
	| 'COMPLETED'
	| 'PARTIAL_PAYMENT'
	| 'CANCELED'

export type PurchasesListItem = {
	id: number
	product: PurchasedProduct
	order_number: string
	total_price: string
	payment_status: PaymentStatus
	pending: string
	completed: string
	partial_payment: string
	canceled: string
	installments: Installment[]
}

export type Installment = {
	number: number
	price: string
	is_paid: boolean
}

export type GetPurchasesResponse = PurchasesListItem[]

export type PurchasedListItem = {
	id: number
	product: PurchasedProduct
	is_setup_completed: boolean
}

export type GetPurchasedProductsResponse = PurchasedListItem[]
