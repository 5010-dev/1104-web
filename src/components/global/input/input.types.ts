import { ChangeEvent, FocusEvent } from 'react'

import { ComponentHierarchy } from '../../../styles/design-system/design-system.types'

export type InputProps = {
	id?: string
	className?: string
	name?: string
	type?: string
	value?: string | number
	placeholder?: string
	isValid: boolean
	hierarchy: ComponentHierarchy
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
	handleFocus?: (e: FocusEvent<HTMLInputElement>) => void
}

export type InputContainerProps = {
	$isFocused: boolean
	$isValid: boolean
	$hierarchy: ComponentHierarchy
}
