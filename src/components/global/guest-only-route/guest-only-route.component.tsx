import { Outlet, Navigate } from 'react-router-dom'

import { useAuthDataStore } from '../../../store/authDataStore'

export default function GuestOnlyRoute() {
	const loginUser = useAuthDataStore((state) => state.loginUser)

	return !loginUser.userId ? <Outlet /> : <Navigate to="/" />
}
