import { DeviceType } from '../../../store/deviceTypeStore'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentShape,
	ComponentSize,
	ComponentStroke,
} from '../../../styles/design-system/design-system.types'

export type ChipProps = {
	appearance: ComponentAppearance
	hierarchy: ComponentHierarchy
	stroke: ComponentStroke
	shape: ComponentShape
	size?: ComponentSize
	text: string
	id?: string
	className?: string
}

export type ChipContainerProps = {
	$deviceType: DeviceType
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
	$stroke: ComponentStroke
	$shape: ComponentShape
	$size: ComponentSize
}
