import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import AuthLayout from '../../global/auth-layout/auth-layout.component'
import LoginForm from '../../../components/feature/login-form/login-form.component'
import SignupForm from '../../../components/feature/signup-form/signup-form.component'
import PasswordResetForm from '../../../components/feature/password-reset-form/password-reset-form.component'

export default function Login() {
	const { resetAuthData } = useAuthDataStore()

	const location = useLocation()
	const navigate = useNavigateWithScroll()
	const state = location.state as
		| { mode: 'login' | 'signup' | 'verification' | 'password-reset' }
		| undefined

	useEffect(() => {
		resetAuthData()

		return () => {
			resetAuthData()
		}
	}, [resetAuthData])

	useEffect(() => {
		if (location.key === 'default') {
			navigate(ROUTES.HOME, { replace: true })
		}
	}, [navigate, location])

	return (
		<AuthLayout>
			{state?.mode === 'login' || state?.mode === undefined ? (
				<LoginForm />
			) : null}
			{state?.mode === 'signup' ? <SignupForm /> : null}
			{state?.mode === 'password-reset' ? <PasswordResetForm /> : null}
		</AuthLayout>
	)
}
