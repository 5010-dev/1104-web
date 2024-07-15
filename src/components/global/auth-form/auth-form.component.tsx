import { useState, useEffect, FormEvent, ChangeEvent } from 'react'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { validateWithRegex, RegexKey } from '../../../utils/regex.utils'

import { AuthFormProps, AuthValidity } from './ayth-form.types'
import { AuthFormContainer } from './auth-form.styles'

import Input from '../../global/input/input.component'
import SellerCodeInput from '../../feature/seller-code-input/seller-code-input.component'
import Button from '../../global/button/button.component'
import WarningText from '../../feature/warning-text/warning-text.component'
import TextLink from '../text-link/text-link.component'

export default function AuthForm(props: AuthFormProps) {
	const {
		variant = 'email',
		heading,
		submitText,
		handleAuthSubmit,
		children,
		textLink,
		sellerCodeInput,
	} = props

	const { email, password, updateAuthData } = useAuthDataStore()
	const [retypedPassword, setRetypedPassword] = useState<string>('')
	const [isAuthValid, setIsAuthValid] = useState<AuthValidity>({
		email: false,
		password: false,
	})
	const [isRetypedPasswordValid, setIsRetypedPasswordValid] =
		useState<boolean>(false)

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		const inputName = e.target.name

		if (inputName === 'retypedPassword') {
			setRetypedPassword(inputValue)
		} else {
			updateAuthData(inputName, inputValue)
			setIsAuthValid((prevState) => ({
				...prevState,
				[inputName]: validateWithRegex(inputName as RegexKey, inputValue),
			}))
		}
	}

	const handleInputReset = (key: string) => {
		updateAuthData(key, '')
		setIsAuthValid((prevState) => ({ ...prevState, [key]: false }))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		handleAuthSubmit(e)
	}

	const validateRetypedPassword = (
		password: string,
		retypedPassword: string,
	): boolean => {
		if (password.length !== 0 && retypedPassword.length !== 0) {
			return retypedPassword === password
		} else return false
	}

	const disableSubmit = (): boolean => {
		if (variant === 'email') {
			return !isAuthValid.email || !isAuthValid.password
		} else if (variant === 'password-reset') {
			return !isAuthValid.password || !isRetypedPasswordValid
		} else return false
	}

	useEffect(() => {
		setIsRetypedPasswordValid(
			validateRetypedPassword(password, retypedPassword),
		)
	}, [password, retypedPassword])

	return (
		<>
			<AuthFormContainer>
				<h1 id="heading">{heading}</h1>
				<form id="login-form" onSubmit={handleSubmit}>
					{!isAuthValid.password && password.length !== 0 ? (
						<WarningText message="비밀번호는 숫자, 특수기호, 대문자가 최소 하나씩 포함된 8자리 이상으로 입력해 주세요." />
					) : null}
					{isAuthValid.password &&
					!isRetypedPasswordValid &&
					retypedPassword.length !== 0 ? (
						<WarningText message="입력하신 비밀번호와 일치하지 않습니다. 다시 한 번 확인해 주세요." />
					) : null}
					{variant === 'email' ? (
						<Input
							name="email"
							type="email"
							value={email}
							className="login-input"
							hierarchy="secondary"
							handleChange={handleInputChange}
							isValid={email.length === 0 || isAuthValid.email}
							placeholder="이메일 주소를 입력해 주세요."
							handleReset={() => handleInputReset('email')}
						/>
					) : null}
					<Input
						name="password"
						type="password"
						value={password}
						className="login-input"
						handleChange={handleInputChange}
						hierarchy="secondary"
						isValid={password.length === 0 || isAuthValid.password}
						placeholder={
							variant === 'password-reset'
								? '변경할 비밀번호를 입력해 주세요.'
								: '비밀번호를 입력해 주세요.'
						}
						handleReset={() => handleInputReset('password')}
					/>
					{variant === 'password-reset' && isAuthValid.password ? (
						<Input
							name="retypedPassword"
							type="password"
							value={retypedPassword}
							className="login-input"
							handleChange={handleInputChange}
							hierarchy="secondary"
							isValid={retypedPassword.length === 0 || isRetypedPasswordValid}
							placeholder="비밀번호를 다시 한 번 입력해 주세요."
							handleReset={() => handleInputReset('retypedPassword')}
						/>
					) : null}
					{sellerCodeInput ? <SellerCodeInput /> : null}
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
						disabled={
							disableSubmit()
							// !isAuthValid.email ||
							// !isAuthValid.password ||
							// !validateRetypedPassword
						}
					/>
				</form>
			</AuthFormContainer>
			{textLink ? (
				<TextLink
					description={textLink.descriptionMessage}
					appearance="neutral"
					hierarchy="secondary"
					size="sm"
					underlined
					text={textLink.linkMessage}
					handleClick={textLink.handleTextLink}
				/>
			) : null}
			{children ? <div id="bottom-row">{children}</div> : null}
		</>
	)
}
