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

			{/* TODO: AssetAmountSelect ← 자산 설계 선택 화면 추가 */}
			{currentProgress === 'assetAmountSelect' ? (
				<div>Asset Amount Select</div>
			) : null}

			{/* TODO: RegistrationComplete ← 셋팅 완료 화면 추가 (축하합니다 + 커뮤니티 참여하기) */}
			{currentProgress === 'registrationComplete' ? (
				<div>Registration Complete</div>
			) : null}
		</RegistrationFormContainer>
	)
}
