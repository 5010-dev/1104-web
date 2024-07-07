import { DeviceType } from '../../../../store/layout/device-type.store'

export type CountdownUnitProps = {
	value: number
	unit: string
}

export type CountdownUnitContainerProps = {
	$deviceType: DeviceType
}
