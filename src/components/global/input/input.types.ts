import { ChangeEvent, FocusEvent, MouseEvent, KeyboardEvent } from 'react'

import { ComponentHierarchy } from '../../../styles/design-system/design-system.types'

export type InputProps = {
	id?: string
	inputId?: string
	className?: string
	inputClassName?: string
	name?: string
	type?: string
	pattern?: string
	autoComplete?: boolean
	maxLength?: number
	value?: string | number
	placeholder?: string
	isValid: boolean
	hierarchy: ComponentHierarchy
	handleClick?: (e: MouseEvent<HTMLInputElement>) => void
	handleKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
	handleFocus?: (e: FocusEvent<HTMLInputElement>) => void
	handleBlur?: (e: FocusEvent<HTMLInputElement>) => void
	isRequired?: boolean
}

export type InputContainerProps = {
	$isFocused: boolean
	$isValid: boolean
	$hierarchy: ComponentHierarchy
}
