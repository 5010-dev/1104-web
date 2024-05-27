import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import {
	useServiceDataStore,
	ServicePlan,
	Service,
} from '../../../store/serviceDataStore'

import { CheckoutContainer } from './checkout.styles'

import CheckoutItem from '../../../components/feature/checkout-item/checkout-item.component'

export default function Checkout() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const service = useServiceDataStore((state) => state.service)
	const navigate = useNavigate()

	const [searchParams] = useSearchParams()
	const plan = searchParams.get('plan') as ServicePlan

	const getServiceByPlan = (plan: ServicePlan): Service => {
		if (plan) return service.find((item) => item.plan === plan) ?? service[0]
		else return service[0]
	}

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	useEffect(() => {
		if (userId.length === 0 || !plan) {
			navigate('/')
		}
	}, [userId, navigate, plan])

	return (
		<CheckoutContainer $deviceType={deviceType}>
			<div id="contents-container">
				<h1 id="heading">주문 결제</h1>
				<CheckoutItem item={getServiceByPlan(plan)} />
			</div>
		</CheckoutContainer>
	)
}
