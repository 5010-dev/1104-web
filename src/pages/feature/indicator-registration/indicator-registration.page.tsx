import { useEffect } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { IndicatorRegistrationContainer } from './indicator-registration.styles'

import RegistrationForm from '../../../components/feature/registration-form/registration-form.component'

export default function IndicatorRegistration() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)

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
			<div id="contents-container">
				<RegistrationForm />
				{/* TODO: RegistrationComplete ← 셋팅 완료 화면 추가 (축하합니다 + 커뮤니티 참여하기) */}
			</div>
		</IndicatorRegistrationContainer>
	)
}
