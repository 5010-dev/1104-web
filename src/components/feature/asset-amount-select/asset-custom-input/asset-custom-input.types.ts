import { ChangeEvent, FocusEvent } from 'react'

export type AssetCustomInputProps = {
	name: string
	value: string
	placeholder: string
	isValid: boolean
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void
	handleFocus: (e: FocusEvent<HTMLInputElement>) => void
	isCustomInputSelected: boolean
}

export type AssetCustomInputContainerProps = {
	$isSelected: boolean
	$isFocused: boolean
	$isValid: boolean
}
