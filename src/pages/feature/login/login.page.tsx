import { useEffect } from 'react'
import { useLocation, useSearchParams, Navigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { LoginState } from './login.page.types'

import AuthLayout from '../../global/auth-layout/auth-layout.component'
import LoginForm from '../../../components/feature/login-form/login-form.component'
import SignupForm from '../../../components/feature/signup-form/signup-form.component'
import SingupSuccess from '../../../components/feature/signup-success/signup-success.component'
import PasswordResetForm from '../../../components/feature/password-reset-form/password-reset-form.component'

export default function Login() {
	const { loginUser, updateAuthData, resetAuthData } = useAuthDataStore()

	const navigate = useNavigateWithScroll()
	const location = useLocation()
	const [searchParams] = useSearchParams()

	const authState = searchParams.get('state') as LoginState
	const codeUrl = searchParams.get('code')
	const routeState = location.state as {
		mode: undefined | 'password-reset'
		status: undefined | 'success'
	}

	const authComponent = (state: LoginState) => {
		switch (state) {
			case 'login':
				return <LoginForm />
			case 'signup':
				return <SignupForm />
			default:
				if (routeState?.mode === 'password-reset') {
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

	useEffect(() => {
		if (location.key === 'default' && loginUser.userId.length !== 0) {
			navigate(ROUTES.HOME, { replace: true })
		}
	}, [loginUser.userId, navigate, location])

	if (routeState?.status === 'success') {
		return <SingupSuccess />
	} else {
		return <AuthLayout>{authComponent(authState)}</AuthLayout>
	}
}
