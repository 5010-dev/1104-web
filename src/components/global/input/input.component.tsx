import { useState, FocusEvent } from 'react'

import { InputProps } from './input.types'
import { InputContainer } from './input.styles'

export default function Input(props: InputProps) {
	const {
		name,
		type,
		value,
		placeholder,
		isValid,
		hierarchy,
		handleChange,
		handleFocus,
	} = props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true)
		handleFocus && handleFocus(e)
	}
	const handleBlur = (e: FocusEvent<HTMLInputElement>) => setIsFocused(false)

	return (
		<InputContainer
			type={type}
			name={name}
			value={value}
			onFocus={handleInputFocus}
			onBlur={handleBlur}
			onChange={handleChange}
			placeholder={placeholder}
			$isFocused={isFocused}
			$isValid={isValid}
			$hierarchy={hierarchy}
		/>
	)
}
