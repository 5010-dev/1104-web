import {
	ChangeEventHandler,
	FocusEventHandler,
	MouseEventHandler,
	KeyboardEventHandler,
} from 'react'
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
	handleClick?: MouseEventHandler<HTMLElement>
	handleKeyDown?: KeyboardEventHandler<HTMLElement>
	handleChange?: ChangeEventHandler<HTMLElement>
	handleReset?: MouseEventHandler<SVGSVGElement>
	handleFocus?: FocusEventHandler<HTMLElement>
	handleBlur?: FocusEventHandler<HTMLElement>
	isRequired?: boolean
	isTextfield?: boolean
}

export type InputContainerProps = {
	$isFocused: boolean
	$isValid: boolean
	$hierarchy: ComponentHierarchy
	$isTextfield: boolean
	$name?: string
	$handleReset?: MouseEventHandler<SVGSVGElement>
}
