import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

import { useToastMessageStore } from '../../../store/globalUiStore'

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

	useEffect(() => {
		if (!isAuthenticated())
			updateToastMessage('회원가입 및 로그인이 필요합니다.')
	}, [updateToastMessage])

	return isAuthenticated() ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ mode: 'login' }} replace={true} />
	)
}
