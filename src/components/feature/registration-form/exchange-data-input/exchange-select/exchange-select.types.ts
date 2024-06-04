import { MouseEvent } from 'react'

export type ExchangeSelectProps = {
	onSubmitSuccess: () => void
	handleBeginnerRegistration: (e: MouseEvent<HTMLButtonElement>) => void
}
