import { useState, FocusEvent } from 'react'

import { InputProps } from './input.types'
import { InputContainer } from './input.styles'

export default function Input(props: InputProps) {
	const {
		id,
		inputId,
		className,
		inputClassName,
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
			$isFocused={isFocused}
			$isValid={isValid}
			$hierarchy={hierarchy}
		>
			<input
				id={inputId}
				className={inputClassName}
				type={type}
				pattern={pattern}
				autoComplete={autoComplete ? 'on' : 'off'}
				maxLength={maxLength && maxLength - 1}
				name={name}
				value={value}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				onChange={handleChange}
				placeholder={placeholder}
				required={isRequired}
			/>

			{maxLength ? (
				<span>
					{value?.toString().length} / {maxLength}
				</span>
			) : null}
		</InputContainer>
	)
}
