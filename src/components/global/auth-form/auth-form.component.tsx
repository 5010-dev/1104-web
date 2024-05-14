import { useState, FormEvent, ChangeEvent } from 'react'

import { useAuthDataStore } from '../../../store/authDataStore'

import { AuthFormProps, AuthValidity } from './ayth-form.types'
import { AuthFormContainer, TextLinkContainer } from './auth-form.styles'

import Input from '../../global/input/input.component'
import Button from '../../global/button/button.component'
import WarningText from '../../feature/warning-text/warning-text.component'
import TextLink from '../text-link/text-link.component'

export default function AuthForm(props: AuthFormProps) {
	const { heading, submitText, handleAuthSubmit, children, textLink } = props

	const { email, password, updateAuthData } = useAuthDataStore((state) => state)
	const [isAuthValid, setIsAuthValid] = useState<AuthValidity>({
		email: false,
		password: false,
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name
		const inputRegex = inputName === 'email' ? emailRegex : passwordRegex

		updateAuthData(inputName, inputValue)
		setIsAuthValid((prevState) => ({
			...prevState,
			[inputName]: validateInput(inputValue, inputRegex),
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleAuthSubmit(e)
	}

	const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
	const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/

	const validateInput = (input: string, regex: RegExp): boolean =>
		regex.test(input)

	return (
		<>
			<AuthFormContainer>
				<h1 id="heading">{heading}</h1>
				<form id="login-form" onSubmit={handleSubmit}>
					{!isAuthValid.password && password.length !== 0 ? (
						<WarningText message="비밀번호는 숫자, 특수기호, 대문자가 최소 하나씩 포함된 8자리 이상으로 입력해 주세요." />
					) : null}
					<Input
						name="email"
						type="email"
						value={email}
						className="login-input"
						hierarchy="secondary"
						handleChange={handleInputChange}
						isValid={email.length === 0 || isAuthValid.email}
						placeholder="이메일 주소를 입력해 주세요."
					/>
					<Input
						name="password"
						type="password"
						value={password}
						className="login-input"
						handleChange={handleInputChange}
						hierarchy="secondary"
						isValid={password.length === 0 || isAuthValid.password}
						placeholder="비밀번호를 입력해 주세요."
					/>
					<Button
						id="submit-button"
						type="submit"
						text={submitText}
						accessibleName="login-form"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						size="md"
						disabled={!isAuthValid.email || !isAuthValid.password}
					/>
				</form>
			</AuthFormContainer>
			<TextLinkContainer id="signup-link-container">
				<span id="signup-text">{textLink.descriptionMessage} </span>
				<TextLink
					appearance="neutral"
					hierarchy="secondary"
					size="sm"
					underlined
					text={textLink.linkMessage}
					handleClick={textLink.handleTextLink}
				/>
			</TextLinkContainer>
			{children ? <div id="bottom-row">{children}</div> : null}
		</>
	)
}
