import { ReactNode } from 'react'

import { DeviceType } from '../../../store/deviceTypeStore'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentShape,
	ComponentStroke,
} from '../../../styles/design-system/design-system.types'

export type CardProps = {
	id?: string
	className?: string
	children?: ReactNode | null
	appearance?: ComponentAppearance
	hierarchy?: ComponentHierarchy
	stroke?: ComponentStroke
	shape?: ComponentShape
}

export type CardContainerProps = {
	$deviceType: DeviceType
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
	$stroke: ComponentStroke
	$shape: ComponentShape
}
