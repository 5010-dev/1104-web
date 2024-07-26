import { MouseEvent } from 'react'
import { DeviceType } from '../../../store/layout/device-type.store'

export type EventBannerVariants = 'modal' | 'inline'

export type EventBannerProps = {
	variants: EventBannerVariants
	handleClose?: (e: MouseEvent<HTMLButtonElement>) => void
}

export type EventBannerContainerProps = {
	$deviceType: DeviceType
	$variants: EventBannerVariants
}
