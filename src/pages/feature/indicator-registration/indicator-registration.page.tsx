import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { IndicatorRegistrationContainer } from './indicator-registration.styles'

export default function IndicatorRegistration() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	useEffect(() => {
		if (userId.length === 0) {
			navigate('/')
			updateToastMessage('잘못된 요청입니다.')
		}
	}, [userId, navigate, updateToastMessage])

	return (
		<IndicatorRegistrationContainer $deviceType={deviceType}>
			REGISTRATION !!
		</IndicatorRegistrationContainer>
	)
}
