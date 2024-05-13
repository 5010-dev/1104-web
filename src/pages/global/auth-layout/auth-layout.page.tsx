import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'

import { AuthLayoutProps, AuthValidity } from './auth-layout.types'
import { AuthLayoutContainer } from './auth-layout.styles'

import Card from '../../../components/global/card/card.component'
import Input from '../../../components/global/input/input.component'
import Button from '../../../components/global/button/button.component'

export default function AuthLayout(props: AuthLayoutProps) {
	const { heading, submitText, handleAuthSubmit } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { email, password, updateAuthData, resetAuthData } = useAuthDataStore(
		(state) => state,
	)

	const [isAuthValid, setIsAuthValid] = useState<AuthValidity>({
		email: false,
		password: false,
	})

	useEffect(() => {
		resetAuthData()
	}, [resetAuthData])

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
		<AuthLayoutContainer $deviceType={deviceType}>
			<Card
				id="login-card"
				appearance="neutral"
				hierarchy="primary"
				stroke="filled"
				shape="rounded2"
				opacity={1}
			>
				<div id="top-row"></div>
				<div id="login-container">
					<h1 id="heading">{heading}</h1>
					<form id="login-form" onSubmit={handleSubmit}>
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
						/>
					</form>
				</div>
				<div id="bottom-row"></div>
			</Card>
			<div id="login-panel"></div>
		</AuthLayoutContainer>
	)
}
