import { useState, FormEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { LoginContainer } from './login.styles'

import Input from '../../../components/global/input/input.component'
import Button from '../../../components/global/button/button.component'

export default function Login() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const [isValid, setIsValid] = useState<boolean>(false)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log('submit')
	}

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
		return emailRegex.test(email)
	}

	return (
		<LoginContainer $deviceType={deviceType}>
			<h1 id="heading">로그인</h1>
			<form id="login-form" onSubmit={handleSubmit}>
				<Input
					name="email"
					type="email"
					className="login-input"
					hierarchy="secondary"
					isValid
					placeholder="이메일 주소를 입력해 주세요."
				/>
				<Input
					name="password"
					type="password"
					className="login-input"
					hierarchy="secondary"
					isValid
					placeholder="비밀번호를 입력해 주세요."
				/>
				<Button
					id="submit-button"
					type="submit"
					text="이메일로 로그인하기"
					accessibleName="login-form"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					size="md"
				/>
			</form>
		</LoginContainer>
	)
}
