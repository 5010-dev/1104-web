import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import { useRegistrationStore } from '../../../store/registrationStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { IndicatorRegistrationContainer } from './indicator-registration.styles'

import NavigationQueueBar from '../../../components/feature/navigation-queue-bar/navigation-queue-bar.component'

export default function IndicatorRegistration() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const {
		currentProgress,
		progress,
		proceedCurrentProgress,
		resetCurrentProgress,
	} = useRegistrationStore()
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	useEffect(() => {
		if (userId.length === 0) {
			navigate('/')
		}
	}, [userId, navigate])

	useEffect(() => {
		if (userId.length === 0) {
			updateToastMessage('잘못된 요청입니다.')
		}
	}, [userId, updateToastMessage])

	return (
		<IndicatorRegistrationContainer $deviceType={deviceType}>
			<NavigationQueueBar
				queueLength={progress.length}
				currentQueue={progress.indexOf(currentProgress)}
			/>
		</IndicatorRegistrationContainer>
	)
}
