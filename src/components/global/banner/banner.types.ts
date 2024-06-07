import { ReactNode } from 'react'
import {
	ComponentAppearance,
	ComponentHierarchy,
} from '../../../styles/design-system/design-system.types'

export type BannerProps = {
	appearance?: ComponentAppearance
	hierarchy?: ComponentHierarchy
	children?: ReactNode | null
}

export type BannerContainerProps = {
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
}
