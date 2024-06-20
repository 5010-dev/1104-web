import { useEffect, MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { RequestPayParams, RequestPayResponse } from 'iamport-typings'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'
import { useToastMessageStore } from '../../../store/globalUiStore'
import { useServiceDataStore, Service } from '../../../store/serviceDataStore'
import { usePaymentStore } from '../../../store/paymentStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { checkoutProduct } from '../../../services/payment/payment-service'

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

	const BASE_URL = window.location.origin
	const id = searchParams.get('id')
	const name = searchParams.get('name')
	const plan = searchParams.get('plan')

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
		try {
			updateStatus('processing')

			const {
				number,
				// total_price
			} = await checkoutProduct({
				id: Number(id),
				coupon: checkoutItem.coupon.code && checkoutItem.coupon.code,
			})

			if (!window.IMP) return
			const { IMP } = window
			IMP.init(process.env.REACT_APP_IMP_ID)

			const params: RequestPayParams = {
				pg: `tosspayments.${process.env.REACT_APP_TOSSPAYMENTS_ID}`,
				pay_method: 'card',
				merchant_uid: number,
				name: `${name} | ${plan}`,
				// amount: parseInt(total_price),
				amount: 200, // HACK: 결제 테스트를 위한 임의 금액 설정
				buyer_email: userId,
				buyer_tel: '',
				m_redirect_url: `${BASE_URL}/checkout?id=${id}&name=${name}&plan=${plan}`,
				confirm_url: `${BASE_URL}/checkout?id=${id}&name=${name}&plan=${plan}`,
			}

			const onPaymentAccepted = async (response: RequestPayResponse) => {
				// NOTE: PC 환경에서만 결제 프로세스 완료 후 실행

				if (response.error_code != null) {
					response.error_msg &&
						updateToastMessage(trimBracketContent(response.error_msg))
					updateStatus('idle')
				} else {
					// TODO: 결제완료 API 엔드포인트
					updateStatus('success')
				}
			}

			IMP.request_pay(params, onPaymentAccepted)
		} catch (error: any) {
			updateToastMessage(error.message)
		}
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
