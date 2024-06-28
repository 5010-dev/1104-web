import { Outlet, Navigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/authDataStore'

export default function GuestOnlyRoute() {
	const { loginUser, passwordResetToken } = useAuthDataStore()

	return !loginUser.userId || passwordResetToken.length !== 0 ? (
		<Outlet />
	) : (
		<Navigate to={ROUTES.HOME} />
	)
}
