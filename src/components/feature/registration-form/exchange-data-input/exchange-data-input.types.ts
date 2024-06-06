import { MouseEvent } from 'react'

export type ExchangeDataInputProps = {
	handleComplete: () => void
}

export type ExchangeDataInputState = 'promotion' | 'exchangeSelect' | 'uidInput'
