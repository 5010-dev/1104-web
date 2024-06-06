import { useState, FocusEvent } from 'react'

import { InputProps } from './input.types'
import { InputContainer } from './input.styles'

export default function Input(props: InputProps) {
	const {
		id,
		className,
		name,
		type,
		pattern,
		autoComplete,
		maxLength,
		value,
		placeholder,
		isValid,
		hierarchy,
		handleClick,
		handleKeyDown,
		handleChange,
		handleFocus,
		handleBlur,
		isRequired,
	} = props

	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused(true)
		handleFocus && handleFocus(e)
	}
	const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
		setIsFocused(false)
		handleBlur && handleBlur(e)
	}

	return (
		<InputContainer
			id={id}
			className={className}
			type={type}
			pattern={pattern}
			autoComplete={autoComplete ? 'on' : 'off'}
			maxLength={maxLength}
			name={name}
			value={value}
			onFocus={handleInputFocus}
			onBlur={handleInputBlur}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			onChange={handleChange}
			placeholder={placeholder}
			$isFocused={isFocused}
			$isValid={isValid}
			$hierarchy={hierarchy}
			required={isRequired}
		/>
	)
}
