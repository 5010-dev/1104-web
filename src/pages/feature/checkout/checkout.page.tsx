import { useEffect, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import { useServiceDataStore, Service } from '../../../store/serviceDataStore'
import { usePaymentStore } from '../../../store/paymentStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { CheckoutContainer } from './checkout.styles'

import CheckoutItem from '../../../components/feature/checkout-item/checkout-item.component'
import CheckoutOption from '../../../components/feature/checkout-option/checkout-option.component'
import CheckoutCodeInput from '../../../components/feature/checkout-code-input/checkout-code-input.component'
import CheckoutBilling from '../../../components/feature/checkout-billing/checkout-billing.component'
import CheckoutTerms from '../../../components/feature/checkout-terms/checkout-terms.component'
import Footer from '../../../components/global/footer/footer.component'
import AnimationPanel from '../../../components/global/animation-panel/animation-panel.component'
import cardAnim from '../../../assets/lottie/card-anim.json'
import PaymentComplete from '../../../components/feature/payment-complete/payment-complete.component'

export default function Checkout() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const service = useServiceDataStore((state) => state.service)
	const { status, updateStatus, checkoutItem } = usePaymentStore()
	const navigate = useNavigateWithScroll()

	const getServiceById = (id: number | null): Service => {
		if (id) {
			return service.find((item) => item.id === id) ?? service[0]
		} else return service[0]
	}

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	const handleCheckout = (e: MouseEvent<HTMLButtonElement>) => {
		// TODO: 결제 요청 및 확인 API 호출 구현
		updateStatus('processing')

		// HACK: 결제 프로세스 진행을 위해 임시 처리
		setTimeout(() => {
			updateStatus('success')
		}, 3000)
	}

	useEffect(() => {
		window.scrollTo({ top: 0 })
		updateStatus('idle')
	}, [updateStatus])

	useEffect(() => {
		if (userId.length === 0 || !checkoutItem.id) {
			navigate('/')
		}
	}, [userId, navigate, checkoutItem])

	useEffect(() => {
		if (userId.length === 0 || !checkoutItem.id) {
			updateToastMessage('잘못된 요청입니다.')
		}
	}, [userId, updateToastMessage, checkoutItem])

	if (status !== 'success') {
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
								<CheckoutItem item={getServiceById(checkoutItem.id)} />
								<CheckoutOption />
								<CheckoutCodeInput />
							</div>
							<div className="item-column" id="right-column">
								<h2 className="column-heading">결제 정보</h2>
								<CheckoutBilling item={getServiceById(checkoutItem.id)} />
								<CheckoutTerms handleCheckout={handleCheckout} />
							</div>
						</div>
					</div>
					{status === 'processing' ? (
						<AnimationPanel
							animationData={cardAnim}
							preventEvent
							animationSize="18rem"
							text="결제가 진행중입니다."
						/>
					) : null}
				</CheckoutContainer>
				<Footer />
			</>
		)
	} else {
		return <PaymentComplete />
	}
}
