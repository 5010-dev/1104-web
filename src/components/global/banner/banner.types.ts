import { ReactNode } from 'react'
import {
	ComponentAppearance,
	ComponentHierarchy,
} from '../../../styles/design-system/design-system.types'

type BannerPosition = 'top' | 'bottom'

export type BannerProps = {
	appearance?: ComponentAppearance
	hierarchy?: ComponentHierarchy
	position?: BannerPosition
	children?: ReactNode | null
}

export type BannerContainerProps = {
	$position: BannerPosition
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
}
