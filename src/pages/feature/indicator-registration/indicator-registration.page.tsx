import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'

import { IndicatorRegistrationContainer } from './indicator-registration.styles'

export default function IndicatorRegistration() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigate()

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
