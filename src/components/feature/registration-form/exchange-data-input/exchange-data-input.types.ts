import { MouseEvent } from 'react'

export type ExchangeDataInputProps = {
	handleComplete: (e: MouseEvent<HTMLButtonElement>) => void
}

export type ExchangeDataInputState = 'promotion' | 'exchangeSelect' | 'uidInput'
