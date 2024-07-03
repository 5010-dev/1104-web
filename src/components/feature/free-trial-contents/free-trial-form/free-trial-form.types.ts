import { DeviceType } from '../../../../store/deviceTypeStore'

export type FreeTrialFormContainerProps = {
	$deviceType: DeviceType
}

export type FreeTrialFormData = {
	email: string
	tel: string
}
