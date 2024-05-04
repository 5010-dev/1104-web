import { MouseEventHandler, ReactElement } from 'react'

export type ButtonAppearance = 'accent' | 'neutral' | 'system'
export type ButtonHierarchy = 'primary' | 'secondary'
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
