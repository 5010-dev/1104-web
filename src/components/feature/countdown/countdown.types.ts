import { DeviceType } from '../../../store/deviceTypeStore'

export type CountdownProps = {
	targetDate: Date
	onComplete?: () => void
}

export type CountdownContainerProps = {
	$deviceType: DeviceType
}
