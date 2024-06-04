import { useState } from 'react'

import { ExchangeDataInputProps } from './exchange-data-input.types'

import ExchangePromotion from './exchange-promotion/exchange-promotion.component'
import ExchangeSelect from './exchange-select/exchange-select.component'
import ExchangeUidInput from '../exchange-uid-input/exchange-uid-input.component'

export default function ExchangeDataInput(props: ExchangeDataInputProps) {
	const { handleComplete } = props

	const [isAccepted, setIsAccepted] = useState<boolean>(false)
	const [isExchangeSelected, setIsExchangeSelected] = useState<boolean>(false)

	if (!isAccepted) {
		return (
			<ExchangePromotion
				handleAccept={() => setIsAccepted(true)}
				handleDecline={handleComplete}
			/>
		)
	} else {
		if (!isExchangeSelected)
			return (
				<ExchangeSelect onSubmitSuccess={() => setIsExchangeSelected(true)} />
			)
		else return <ExchangeUidInput />
	}
}
