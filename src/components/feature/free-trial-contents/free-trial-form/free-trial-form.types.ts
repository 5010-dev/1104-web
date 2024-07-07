import { DeviceType } from '../../../../store/layout/device-type.store'

export type FreeTrialFormContainerProps = {
	$deviceType: DeviceType
}

export type FreeTrialFormData = {
	email: string
	tel: string
}
