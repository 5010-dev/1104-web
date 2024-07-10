import { useEffect } from 'react'
import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useToastMessageStore } from '../../../store/layout/global-ui.store'

import { getAccessToken, getRefreshToken } from '../../../utils/token.utils'

const isAuthenticated = () => {
	const accessToken = getAccessToken()
	const refreshToken = getRefreshToken()

	return !!accessToken || !!refreshToken
}

export default function PrivateRoute() {
	const updateToastMessage = useToastMessageStore(
		(state) => state.updateToastMessage,
	)
	const location = useLocation()

	useEffect(() => {
		if (!isAuthenticated())
			updateToastMessage('회원가입 및 로그인이 필요합니다.')
	}, [updateToastMessage])

	return isAuthenticated() ? (
		<Outlet />
	) : (
		<Navigate
			to={ROUTES.LOGIN}
			state={{ mode: 'login', from: location.pathname }}
			replace={true}
		/>
	)
}
