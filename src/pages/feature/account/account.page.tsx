import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'

import { AccountContainer } from './account.styles'

export default function Account() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const navigate = useNavigate()

	useEffect(() => {
		if (userId.length === 0) {
			navigate('/')
		}
	}, [userId, navigate])

	return (
		<AccountContainer $deviceType={deviceType}>
			<div id="contents-container">
				<h1 id="heading">내 정보</h1>
				{userId}
			</div>
		</AccountContainer>
	)
}
