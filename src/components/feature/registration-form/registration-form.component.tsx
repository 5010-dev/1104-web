import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useRegistrationStore } from '../../../store/registrationStore'

import { RegistrationFormContainer } from './registration-form.styles'

import NavigationQueueBar from '../navigation-queue-bar/navigation-queue-bar.component'
import TradingviewIdInput from './tradingview-id-input/tradingview-id-input.component'
import ExchangeDataInput from './exchange-data-input/exchange-data-input.component'
import AssetAmountSelect from '../asset-amount-select/asset-amount-select.component'
import RegistrationComplete from '../registration-complete/registration-complete.component'

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
			{currentProgress !== 'registrationComplete' ? (
				<NavigationQueueBar
					queueLength={progress.length - 1}
					currentQueue={progress.indexOf(currentProgress)}
				/>
			) : null}
			{currentProgress === 'tradingviewIdInput' ? (
				<TradingviewIdInput onSubmitSuccess={handleProceed} />
			) : null}
			{currentProgress === 'exchangeDataInput' ? (
				<ExchangeDataInput handleComplete={handleProceed} />
			) : null}
			{currentProgress === 'assetAmountSelect' ? (
				<AssetAmountSelect onSubmitSuccess={handleProceed} />
			) : null}
			{currentProgress === 'registrationComplete' ? (
				<RegistrationComplete />
			) : null}
		</RegistrationFormContainer>
	)
}
