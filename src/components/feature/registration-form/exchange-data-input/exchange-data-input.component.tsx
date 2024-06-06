import { useState } from 'react'

import {
	ExchangeDataInputProps,
	ExchangeDataInputState,
} from './exchange-data-input.types'

import ExchangePromotion from './exchange-promotion/exchange-promotion.component'
import ExchangeSelect from './exchange-select/exchange-select.component'
import ExchangeUidInput from '../exchange-uid-input/exchange-uid-input.component'

export default function ExchangeDataInput(props: ExchangeDataInputProps) {
	const { handleComplete } = props

	const [exchangeDataInputState, setExchangeDataInputState] =
		useState<ExchangeDataInputState>('promotion')

	switch (exchangeDataInputState) {
		case 'promotion':
			return (
				<ExchangePromotion
					handleAccept={() => setExchangeDataInputState('uidInput')}
					handleDecline={() => setExchangeDataInputState('exchangeSelect')}
				/>
			)
		case 'exchangeSelect':
			return (
				<ExchangeSelect
					onSubmitSuccess={handleComplete}
					handleBeginnerRegistration={() =>
						setExchangeDataInputState('uidInput')
					}
				/>
			)
		case 'uidInput':
			return <ExchangeUidInput onSubmitSuccess={handleComplete} />
	}
}
