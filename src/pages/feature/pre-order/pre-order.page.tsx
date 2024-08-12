import { useSearchParams, Navigate, useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import backgroundImage from '../../../assets/img/pre-order-image.webp'

import { PreOrderContainer } from './pre-order.styles'

import PreOrderRegister from '../../../components/feature/pre-order-register/pre-order-register.component'
import PreOrderDetails from '../../../components/feature/pre-order-details/pre-order-details.component'
import EventSuccess from './event-success/event-success.component'

export default function PreOrder() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const [searchParams] = useSearchParams()
	const location = useLocation()
	const routeState = location.state?.mode

	const renderComponent = () => {
		const register = searchParams.has('register')
		const details = searchParams.has('details')

		if (register) {
			return <PreOrderRegister />
		} else if (details) {
			return <PreOrderDetails />
		} else {
			return <Navigate to={`${ROUTES.HOME}?register`} />
		}
	}

	switch (routeState) {
		case 'success':
			return <EventSuccess />
		default:
			return (
				<PreOrderContainer $deviceType={deviceType} $imageUrl={backgroundImage}>
					{renderComponent()}
				</PreOrderContainer>
			)
	}
}
