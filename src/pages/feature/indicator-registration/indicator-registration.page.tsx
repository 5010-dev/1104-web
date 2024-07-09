import { useEffect } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { IndicatorRegistrationContainer } from './indicator-registration.styles'

import RegistrationForm from '../../../components/feature/registration-form/registration-form.component'

export default function IndicatorRegistration() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)

	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	useEffect(() => {
		if (userId.length === 0) {
			navigate(ROUTES.HOME)
		}
	}, [userId, navigate])

	useEffect(() => {
		if (userId.length === 0) {
			updateToastMessage('잘못된 요청입니다.')
		}
	}, [userId, updateToastMessage])

	return (
		<IndicatorRegistrationContainer $deviceType={deviceType}>
			<div id="contents-container">
				<RegistrationForm />
			</div>
		</IndicatorRegistrationContainer>
	)
}
