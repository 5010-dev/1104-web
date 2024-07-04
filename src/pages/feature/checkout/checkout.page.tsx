import { useEffect, MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import { useServiceDataStore, Service } from '../../../store/serviceDataStore'
import { usePaymentStore } from '../../../store/paymentStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

// import { checkoutProduct } from '../../../services/payment/payment-service'

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
	const { isUserDataLoaded } = useAuthDataStore()
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const service = useServiceDataStore((state) => state.service)
	const { status, updateStatus, checkoutItem } = usePaymentStore()
	const navigate = useNavigateWithScroll()
	const [searchParams] = useSearchParams()

	// const BASE_URL = window.location.origin
	const id = searchParams.get('id')
	// const name = searchParams.get('name')
	// const plan = searchParams.get('plan')

	const getServiceById = (id: number | null): Service => {
		if (id) {
			return service.find((item) => item.id === id) ?? service[0]
		} else return service[0]
	}

	const trimBracketContent = (str: string): string => {
		return str.replace(/\[[^\]]+\]\s*/, '')
	}

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => navigate('/')

	const handleCheckout = async (e: MouseEvent<HTMLButtonElement>) => {
		// TODO: 결제 요청 및 확인 API 호출 구현
	}

	useEffect(() => {
		window.scrollTo({ top: 0 })
		updateStatus('idle')
	}, [updateStatus])

	useEffect(() => {
		if (isUserDataLoaded) {
			if (userId.length === 0) {
				navigate('/')
			}
		}
	}, [userId, navigate, checkoutItem, isUserDataLoaded])

	useEffect(() => {
		if (isUserDataLoaded) {
			if (userId.length === 0) {
				updateToastMessage('잘못된 요청입니다.')
			}
		}
	}, [userId, updateToastMessage, checkoutItem, isUserDataLoaded])

	useEffect(() => {
		// 모바일 환경에서의 쿼리 리디렉션에 따른 결제 프로세스 로직
		const imp_uid = searchParams.has('imp_uid')
		const merchant_uid = searchParams.has('merchant_uid')
		const error_code = searchParams.has('error_code')
		const error_msg = searchParams.get('error_msg')

		if (imp_uid && merchant_uid) {
			if (!error_code) {
				updateStatus('success')
			} else {
				updateStatus('idle')
				error_msg && updateToastMessage(trimBracketContent(error_msg))
			}
		}
	}, [searchParams, updateStatus, updateToastMessage])

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
								<CheckoutItem item={getServiceById(Number(id))} />
								<CheckoutOption />
								<CheckoutCodeInput />
							</div>
							<div className="item-column" id="right-column">
								<h2 className="column-heading">결제 정보</h2>
								<CheckoutBilling
									item={getServiceById(Number(id))}
									discount={checkoutItem.discount && checkoutItem.discount}
								/>
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
