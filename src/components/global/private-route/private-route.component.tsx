import { useEffect } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthNavigationStore } from '../../../store/auth-navigation/auth-navigation.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'

import { getAccessToken, getRefreshToken } from '../../../utils/token.utils'

const isAuthenticated = () => {
	const accessToken = getAccessToken()
	const refreshToken = getRefreshToken()

	return !!accessToken || !!refreshToken
}

export default function PrivateRoute() {
	const { setAuthDestination } = useAuthNavigationStore()
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const location = useLocation()

	useEffect(() => {
		setAuthDestination(null)

		if (!isAuthenticated()) {
			updateToastMessage('회원가입 및 로그인이 필요합니다.')
			setAuthDestination(location.pathname + location.search)
		}
	}, [
		updateToastMessage,
		setAuthDestination,
		location.pathname,
		location.search,
	])

	if (!isAuthenticated()) {
		return <Navigate to={ROUTES.LOGIN} replace={true} />
	}

	return <Outlet />
}
