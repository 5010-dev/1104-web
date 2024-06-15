import { DeviceType } from '../../../../store/deviceTypeStore'

export type CountdownUnitProps = {
	value: number
	unit: string
}

export type CountdownUnitContainerProps = {
	$deviceType: DeviceType
}
