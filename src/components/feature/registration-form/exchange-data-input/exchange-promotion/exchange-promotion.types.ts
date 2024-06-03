import { MouseEvent } from 'react'

export type ExchangePromotionProps = {
	handleAccept: (e: MouseEvent<HTMLButtonElement>) => void
	handleDecline: (e: MouseEvent<HTMLButtonElement>) => void
}
