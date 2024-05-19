import { useState, useCallback, ChangeEvent, FocusEvent } from 'react'

import { useAuthDataStore } from '../../../../store/authDataStore'

import { VerificationInputProps } from './verification-input.types'
import { VerificationInputContainer } from './verification-input.styles'

import Input from '../../../global/input/input.component'

export default function VerificationInput(props: VerificationInputProps) {
	const { maxLength } = props

	const { verificationCode, updateAuthData } = useAuthDataStore()
	const [isFocused, setIsFocused] = useState<boolean>(false)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name
		const numericValue = inputValue.replace(/[^0-9]/g, '')

		if (numericValue.length <= maxLength) {
			updateAuthData(inputName, numericValue)
		}
	}

	const formatValue = (value: string) => {
		const chars = value.split('')
		const formattedChars = chars.map((char, index) => {
			if (index === chars.length - 1) {
				return <span key={index}>{char}</span>
			}
			return (
				<span key={index} style={{ marginRight: '1rem' }}>
					{char}
				</span>
			)
		})
		return <>{formattedChars}</>
	}

	const renderPlaceholder = (value: string) => {
		const placeholderChars = '_'.repeat(maxLength - value.length).split('')
		const formattedChars = placeholderChars.map((char, index) => {
			if (index === 0 && verificationCode.length === 0) {
				return <span key={index}>{char}</span>
			}
			return (
				<span key={index} style={{ marginLeft: '1rem' }}>
					{char}
				</span>
			)
		})
		return <>{formattedChars}</>
	}

	const setCursorPosition = useCallback(() => {
		const input = document.getElementById(
			'verification-input',
		) as HTMLInputElement
		if (input) {
			input.setSelectionRange(verificationCode.length, verificationCode.length)
		}
	}, [verificationCode])

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (
			e.key === 'ArrowLeft' ||
			e.key === 'ArrowRight' ||
			e.key === 'ArrowUp' ||
			e.key === 'ArrowDown' ||
			e.key === 'a'
		) {
			e.preventDefault()
		}
	}

	const handleInputFocus = (e: FocusEvent<HTMLInputElement>) =>
		setIsFocused(true)

	const handleBlur = (e: FocusEvent<HTMLInputElement>) => setIsFocused(false)

	return (
		<VerificationInputContainer $isFocused={isFocused}>
			<Input
				id="verification-input"
				name="verificationCode"
				type="tel"
				pattern="\d*"
				autoComplete={false}
				maxLength={maxLength}
				value={verificationCode}
				handleClick={setCursorPosition}
				handleKeyDown={handleKeyDown}
				handleChange={handleInputChange}
				handleFocus={handleInputFocus}
				handleBlur={handleBlur}
				isValid
				hierarchy="secondary"
			/>
			<div id="verification-code-container">
				{formatValue(verificationCode)}
				{renderPlaceholder(verificationCode)}
			</div>
		</VerificationInputContainer>
	)
}
