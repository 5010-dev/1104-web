import { MouseEvent } from 'react'

export type CheckoutTermsButtonProps = {
	isDisabled: boolean
	handleCheckout: (e: MouseEvent<HTMLButtonElement>) => void
}
