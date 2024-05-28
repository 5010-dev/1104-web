import { useEffect, MouseEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import {
	useServiceDataStore,
	ServicePlan,
	Service,
} from '../../../store/serviceDataStore'

import { CheckoutContainer } from './checkout.styles'

import CheckoutItem from '../../../components/feature/checkout-item/checkout-item.component'
import CheckoutOption from '../../../components/feature/checkout-option/checkout-option.component'
import CheckoutCodeInput from '../../../components/feature/checkout-code-input/checkout-code-input.component'
import CheckoutBilling from '../../../components/feature/checkout-billing/checkout-billing.component'
import CheckoutTerms from '../../../components/feature/checkout-terms/checkout-terms.component'
import Footer from '../../../components/global/footer/footer.component'

export default function Checkout() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const service = useServiceDataStore((state) => state.service)
	const navigate = useNavigate()

	const [searchParams] = useSearchParams()
	const plan = searchParams.get('plan') as ServicePlan

	const getServiceByPlan = (plan: ServicePlan): Service => {
		if (plan) return service.find((item) => item.plan === plan) ?? service[0]
		else return service[0]
	}

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [])

	useEffect(() => {
		if (userId.length === 0 || !plan) {
			navigate('/')
			updateToastMessage('잘못된 요청입니다.')
		}
	}, [userId, navigate, plan, updateToastMessage])

	return (
		<>
			<CheckoutContainer $deviceType={deviceType}>
				<div id="contents-container">
					<div id="top-row">
						<h1 id="heading">주문 결제</h1>
						<button
							id="close-button"
							onClick={handleClose}
							aria-labelledby="top-row"
						>
							<FontAwesomeIcon icon={faXmark} />
						</button>
					</div>
					<div id="item-columns-container">
						<div className="item-column" id="left-column">
							<h2 className="column-heading">주문 정보</h2>
							<CheckoutItem item={getServiceByPlan(plan)} />
							<CheckoutOption />
							<CheckoutCodeInput />
						</div>
						<div className="item-column" id="right-column">
							<h2 className="column-heading">결제 정보</h2>
							<CheckoutBilling item={getServiceByPlan(plan)} />
							<CheckoutTerms handleCheckout={() => {}} />
						</div>
					</div>
				</div>
			</CheckoutContainer>
			<Footer />
		</>
	)
}
