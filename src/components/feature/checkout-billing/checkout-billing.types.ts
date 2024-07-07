import { Product } from '../../../services/product/product-service.types'

export type CheckoutBillingProps = {
	item: Product
	discount?: number
}
