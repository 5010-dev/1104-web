import { DeviceType } from '../../../store/layout/device-type.store'

export type SignupReward = {
	heading: string
	body: string
}

export type SignupSuccessContainerProps = {
	$deviceType: DeviceType
}
