import { DeviceType } from '../../../store/layout/device-type.store'

export type EventBannerVariants = 'modal' | 'inline'

export type EventBannerProps = {
	variants: EventBannerVariants
}

export type EventBannerContainerProps = {
	$deviceType: DeviceType
}
