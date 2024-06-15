import { Outlet, Navigate } from 'react-router-dom'

export default function EventRoute() {
	return process.env.REACT_APP_ENV === 'dev' ? (
		<Outlet />
	) : (
		<Navigate to="/pre-order" />
	)
}
