import { useEffect } from 'react'
import { useLocation, useSearchParams, Navigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'

import { LoginState } from './login.page.types'

import AuthLayout from '../../global/auth-layout/auth-layout.component'
import LoginForm from '../../../components/feature/login-form/login-form.component'
import SignupForm from '../../../components/feature/signup-form/signup-form.component'
import PasswordResetForm from '../../../components/feature/password-reset-form/password-reset-form.component'

export default function Login() {
	const { updateAuthData, resetAuthData } = useAuthDataStore()

	const location = useLocation()
	const [searchParams] = useSearchParams()

	const authState = searchParams.get('state') as LoginState
	const codeUrl = searchParams.get('code')
	const pageState = location.state as { mode: undefined | 'password-reset' }

	const authComponent = (state: LoginState) => {
		switch (state) {
			case 'login':
				return <LoginForm />
			case 'signup':
				return <SignupForm />
			default:
				if (pageState?.mode === 'password-reset') {
					return <PasswordResetForm />
				} else {
					return <Navigate to={ROUTES.HOME} />
				}
		}
	}

	useEffect(() => {
		resetAuthData()

		if (codeUrl) {
			updateAuthData('sellerCode', codeUrl)
		}

		return () => {
			resetAuthData()
		}
	}, [codeUrl, updateAuthData, resetAuthData])

	// useEffect(() => {
	// 	if (location.key === 'default') {
	// 		navigate(ROUTES.HOME, { replace: true })
	// 	}
	// }, [navigate, location])

	return <AuthLayout>{authComponent(authState)}</AuthLayout>
}
