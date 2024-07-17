import { Outlet, Navigate } from 'react-router-dom'

export default function EventRoute() {
	return process.env.REACT_APP_ENV !== 'event' ? (
		<Outlet />
	) : (
		<Navigate to="/" />
	)
}
