import { DeviceType } from '../../../store/layout/device-type.store'

export type CountdownProps = {
	targetDate: Date
	onComplete?: () => void
}

export type CountdownContainerProps = {
	$deviceType: DeviceType
}
