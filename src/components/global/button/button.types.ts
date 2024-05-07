import { MouseEventHandler, ReactElement } from 'react'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentShape,
	ComponentSize,
	ComponentStroke,
} from '../../../styles/design-system/design-system.types'

export interface ButtonProps {
	appearance: ComponentAppearance
	hierarchy: ComponentHierarchy
	stroke: ComponentStroke
	shape: ComponentShape
	size?: ComponentSize
	icon?: ReactElement
	text?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	id?: string
	className?: string
	type?: 'submit' | 'button' | 'reset'
	accessibleName?: string
}

export type ButtonContainerProps = {
	$size: ComponentSize
}
