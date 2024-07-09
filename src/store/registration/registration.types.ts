export type RegistrationProgress =
	| 'tradingviewIdInput'
	| 'exchangeDataInput'
	| 'assetAmountSelect'
	| 'registrationComplete'

export interface RegistrationState {
	currentProgress: RegistrationProgress
	progress: RegistrationProgress[]
}

export interface RegistrationAction {
	proceedCurrentProgress: () => void
	updateCurrentProgress: (value: RegistrationProgress) => void
	resetCurrentProgress: () => void
}
