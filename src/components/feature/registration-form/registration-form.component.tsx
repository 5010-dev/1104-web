import { useEffect, MouseEvent, FormEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useRegistrationStore } from '../../../store/registrationStore'

import { RegistrationFormContainer } from './registration-form.styles'

import NavigationQueueBar from '../navigation-queue-bar/navigation-queue-bar.component'
import TradingviewIdInput from './tradingview-id-input/tradingview-id-input.component'
import ExchangeUidInput from './exchange-uid-input/exchange-uid-input.component'
import Button from '../../global/button/button.component'

export default function RegistrationForm() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const {
		currentProgress,
		progress,
		proceedCurrentProgress,
		resetCurrentProgress,
	} = useRegistrationStore()

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		//TODO: 인디케이터 셋팅 데이터 전송 API
	}

	const handleProceed = (e: MouseEvent<HTMLButtonElement>) =>
		proceedCurrentProgress()

	useEffect(() => {
		resetCurrentProgress()
	}, [resetCurrentProgress])

	return (
		<RegistrationFormContainer
			className="registration-form-container"
			$deviceType={deviceType}
			onSubmit={handleSubmit}
		>
			<NavigationQueueBar
				queueLength={progress.length}
				currentQueue={progress.indexOf(currentProgress)}
			/>

			{currentProgress === 'tradingviewIdInput' ? <TradingviewIdInput /> : null}
			{currentProgress === 'exchangeUidInput' ? <ExchangeUidInput /> : null}

			<Button
				type="submit"
				accessibleName="registration-form-container"
				appearance="accent"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				text={'다음 단계로'}
				handleClick={handleProceed}
			/>
		</RegistrationFormContainer>
	)
}
