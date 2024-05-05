import { MouseEventHandler, ReactElement } from 'react'
import {
	ColourSystem,
	ColourHierarchy,
} from '../../../styles/design-system/design-system.types'

export type ButtonAppearance = keyof ColourSystem
export type ButtonHierarchy = keyof ColourHierarchy
export type ButtonShape = 'rounding' | 'rounded'

export interface ButtonProps {
	appearance: ButtonAppearance
	hierarchy: ButtonHierarchy
	shape: ButtonShape
	icon?: ReactElement
	text?: string
	handleClick?: MouseEventHandler<HTMLButtonElement>
	disabled?: boolean
	id?: string
	type?: 'submit' | 'button' | 'reset'
	accessibleName?: string
}

export type ButtonContainerProps = {
	$shape: ButtonShape
	$appearance: ButtonAppearance
	$hierarchy: ButtonHierarchy
}
