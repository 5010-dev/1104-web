import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import { useAuthDataStore } from '../../../store/authDataStore'

import AuthLayout from '../../global/auth-layout/auth-layout.component'

import LoginForm from '../../../components/feature/login-form/login-form.component'
import SignupForm from '../../../components/feature/signup-form/signup-form.component'

export default function Login() {
	const { resetAuthData } = useAuthDataStore((state) => state)

	const location = useLocation()
	const state = location.state as
		| { mode: 'login' | 'signup' | 'verification' }
		| undefined

	useEffect(() => {
		resetAuthData()
	}, [resetAuthData])

	return (
		<AuthLayout>
			{state?.mode === 'login' || state?.mode === undefined ? (
				<LoginForm />
			) : null}
			{state?.mode === 'signup' ? <SignupForm /> : null}
		</AuthLayout>
	)
}
