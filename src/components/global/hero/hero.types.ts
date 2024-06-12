import { DeviceType } from '../../../store/deviceTypeStore'

export type HeroProps = {
	id?: string
	className?: string
	image: string
	category: string
	heading: string
	subheading: string
}

export type HeroContainerProps = {
	$deviceType: DeviceType
	$imageUrl: string
	$isPointerCoarseAndSafari: boolean
}
