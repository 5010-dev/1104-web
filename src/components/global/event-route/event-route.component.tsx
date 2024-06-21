import { Outlet, Navigate } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

export default function EventRoute() {
	return process.env.REACT_APP_ENV !== 'event' ? (
		<Outlet />
	) : (
		<Navigate to={ROUTES.PRE_ORDER} />
	)
}
