import { useLocation } from 'react-router-dom'

import AuthLayout from '../../global/auth-layout/auth-layout.component'
import LoginForm from '../../../components/feature/login-form/login-form.component'
import SignupForm from '../../../components/feature/signup-form/signup-form.component'
import PasswordResetForm from '../../../components/feature/password-reset-form/password-reset-form.component'

export default function Login() {
	const location = useLocation()
	const state = location.state as
		| { mode: 'login' | 'signup' | 'verification' | 'password-reset' }
		| undefined

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
