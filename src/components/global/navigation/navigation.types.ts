import { DeviceType } from '../../../store/layout/device-type.store'

export type NavigationContainerProps = {
	$deviceType: DeviceType
	$isOverlaped?: boolean
	$isScrolled?: boolean
	$isMenuOpen: boolean
}
