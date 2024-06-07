import { ReactNode, MouseEvent } from 'react'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentStroke,
} from '../../../styles/design-system/design-system.types'

type BannerPosition = 'top' | 'bottom'

export type BannerProps = {
	appearance?: ComponentAppearance
	hierarchy?: ComponentHierarchy
	buttonStroke?: ComponentStroke
	position?: BannerPosition
	buttonText?: string
	children?: ReactNode | null
	handleClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export type BannerContainerProps = {
	$position: BannerPosition
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
}
