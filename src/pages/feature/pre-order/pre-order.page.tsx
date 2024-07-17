import { useEffect } from 'react'
import { useSearchParams, Navigate } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useEventReferralStore } from '../../../store/eventReferralStore'

import backgroundImage from '../../../assets/img/pre-order-image.webp'

import { PreOrderContainer } from './pre-order.styles'

import PreOrderRegister from '../../../components/feature/pre-order-register/pre-order-register.component'
import PreOrderDetails from '../../../components/feature/pre-order-details/pre-order-details.component'

export default function PreOrder() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { code, updateCode } = useEventReferralStore()
	const [searchParams] = useSearchParams()

	const renderComponent = () => {
		const register = searchParams.has('register')
		const details = searchParams.has('details')

		if (register) {
			return <PreOrderRegister />
		} else if (details) {
			return <PreOrderDetails />
		} else {
			return <Navigate to="/?register" replace />
		}
	}

	useEffect(() => {
		const referralCode = searchParams.get('code')

		if (referralCode && referralCode.length !== 0) {
			updateCode(referralCode)
		}
	}, [updateCode, code, searchParams])

	return (
		<PreOrderContainer $deviceType={deviceType} $imageUrl={backgroundImage}>
			{renderComponent()}
		</PreOrderContainer>
	)
}
