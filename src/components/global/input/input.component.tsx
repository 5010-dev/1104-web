import { useState, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

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
		handleReset,
		handleFocus,
		handleBlur,
		isRequired,
		isTextfield = false,
	} = props

	const [isFocused, setIsFocused] = useState<boolean>(false)
	const [showPassword, setShowPassword] = useState<boolean>(false)

	const InputElement = isTextfield ? 'textarea' : 'input'

	const handleShowPassword = (e: MouseEvent<SVGSVGElement>) =>
		setShowPassword((state) => !state)

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
				type={showPassword ? 'text' : type}
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

			<div id="input-buttons-container">
				{name === 'password' ? (
					<FontAwesomeIcon
						icon={showPassword ? faEye : faEyeSlash}
						onClick={handleShowPassword}
						className="input-function-button"
					/>
				) : null}
				{value?.toString().length !== 0 && handleReset ? (
					<FontAwesomeIcon
						icon={faCircleXmark}
						onClick={handleReset}
						className="input-function-button"
					/>
				) : null}
			</div>
			{maxLength && (
				<span>
					{value?.toString().length} / {maxLength}
				</span>
			)}
		</InputContainer>
	)
}
