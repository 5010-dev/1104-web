import { MouseEventHandler, ReactElement } from 'react'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentShape,
} from '../../../styles/design-system/design-system.types'

export interface ButtonProps {
	appearance: ComponentAppearance
	hierarchy: ComponentHierarchy
	shape: ComponentShape
	icon?: ReactElement
	text?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	id?: string
	type?: 'submit' | 'button' | 'reset'
	accessibleName?: string
}
