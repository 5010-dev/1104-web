import React, { useState } from 'react'
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
		isTextfield = false,
	} = props

	const [isFocused, setIsFocused] = useState(false)

	const InputElement = isTextfield ? 'textarea' : 'input'

	return (
		<InputContainer
			id={id}
			className={className}
			$isFocused={isFocused}
			$isValid={isValid}
			$hierarchy={hierarchy}
			$isTextfield={isTextfield}
		>
			<InputElement
				id={inputId}
				className={inputClassName}
				type={type}
				pattern={pattern}
				autoComplete={autoComplete ? 'on' : 'off'}
				maxLength={maxLength && maxLength - 1}
				name={name}
				value={value}
				onFocus={(e) => {
					setIsFocused(true)
					handleFocus?.(e)
				}}
				onBlur={(e) => {
					setIsFocused(false)
					handleBlur?.(e)
				}}
				onClick={handleClick}
				onKeyDown={handleKeyDown}
				onChange={handleChange}
				placeholder={placeholder}
				required={isRequired}
			/>
			{maxLength && (
				<span>
					{value?.toString().length} / {maxLength}
				</span>
			)}
		</InputContainer>
	)
}
