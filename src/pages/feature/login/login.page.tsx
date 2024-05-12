import { FormEvent } from 'react'

import AuthLayout from '../../global/auth-layout/auth-layout.page'

export default function Login() {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		console.log('login submitted')
	}

	return (
		<AuthLayout
			heading="로그인"
			submitText="이메일로 로그인하기"
			handleAuthSubmit={handleSubmit}
		/>
	)
}
