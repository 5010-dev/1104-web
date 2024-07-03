import { ReactNode } from 'react'
import { DeviceType } from '../../../store/deviceTypeStore'

export type HeroProps = {
	id?: string
	className?: string
	image: string
	category: string
	heading: string
	subheading: string
	fullScreen?: boolean
	showArrow?: boolean
	bodyContents?: ReactNode | null
	shadeOpacity?: number[]
}

export type HeroContainerProps = {
	$deviceType: DeviceType
	$imageUrl: string
	$isPointerCoarseAndSafari: boolean
	$fullScreen: boolean
	$shadeOpacity: number[]
}
