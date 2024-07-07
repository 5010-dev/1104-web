import { MouseEvent } from 'react'
import { Product } from '../../../services/product/product-service.types'

export type TosspaymentsWidgetModalProps = {
	id: number
	item: Product
	handleClose: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
}
