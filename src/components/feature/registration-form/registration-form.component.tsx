import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useRegistrationStore } from '../../../store/registrationStore'

import { RegistrationFormContainer } from './registration-form.styles'

import NavigationQueueBar from '../navigation-queue-bar/navigation-queue-bar.component'
import TradingviewIdInput from './tradingview-id-input/tradingview-id-input.component'
import ExchangeDataInput from './exchange-data-input/exchange-data-input.component'

export default function RegistrationForm() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const {
		currentProgress,
		progress,
		proceedCurrentProgress,
		resetCurrentProgress,
	} = useRegistrationStore()

	const handleProceed = () => proceedCurrentProgress()

	useEffect(() => {
		resetCurrentProgress()
	}, [resetCurrentProgress])

	return (
		<RegistrationFormContainer
			className="registration-form-container"
			$deviceType={deviceType}
		>
			<NavigationQueueBar
				queueLength={progress.length}
				currentQueue={progress.indexOf(currentProgress)}
			/>
			{currentProgress === 'tradingviewIdInput' ? (
				<TradingviewIdInput onSubmitSuccess={handleProceed} />
			) : null}
			{currentProgress === 'exchangeDataInput' ? <ExchangeDataInput /> : null}
		</RegistrationFormContainer>
	)
}
