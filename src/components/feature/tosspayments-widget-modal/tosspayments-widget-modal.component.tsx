import { useState, useEffect, useRef, MouseEvent } from 'react'
import {
	loadPaymentWidget,
	PaymentWidgetInstance,
	ANONYMOUS,
} from '@tosspayments/payment-widget-sdk'
import { nanoid } from 'nanoid'
import { ROUTES } from '../../../routes/routes'
import Lottie from 'lottie-react'
import spinnerAnim from '../../../assets/lottie/spinner-anim-dark.json'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { usePaymentStore } from '../../../store/paymentStore'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import { checkoutProduct } from '../../../services/payment/payment-service'
import { CheckoutResponse } from '../../../services/payment/payment-service.types'

import { TosspaymentsWidgetModalProps } from './tosspayments-widget-modal.types'
import { TosspaymentsWidgetContentsContainer } from './tosspayments-widget-modal.styles'

import Modal from '../../global/modal/modal.component'
import Button from '../../global/button/button.component'
import WarningText from '../warning-text/warning-text.component'

export default function TosspaymentsWidgetModal(
	props: TosspaymentsWidgetModalProps,
) {
	const { item, id, handleClose } = props

	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { checkoutItem } = usePaymentStore()
	const { updateToastMessage } = useToastMessageStore()

	const [paymentWidget, setPaymentWidget] =
		useState<PaymentWidgetInstance | null>(null)
	const [checkoutData, setCheckoutData] = useState<CheckoutResponse | null>(
		null,
	)
	const [isLoadingWidget, setIsLoadingWidget] = useState(true)
	const [isLoadingCheckout, setIsLoadingCheckout] = useState(true)
	const [isInitiated, setIsInitiated] = useState(true)
	const paymentMethodsWidgetRef = useRef<ReturnType<
		PaymentWidgetInstance['renderPaymentMethods']
	> | null>(null)

	const BASE_URL = window.location.origin
	const widgetClientKey = process.env.REACT_APP_CLIENT_KEY
	const customerKey = ANONYMOUS // TODO: 사용자 UUID로 변경 필요

	const handleCheckout = async (e: MouseEvent<HTMLButtonElement>) => {
		try {
			// TODO: 결제 요청 및 확인 API 호출 구현
			// 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
			// 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
			await paymentWidget?.requestPayment({
				orderId: nanoid(),
				orderName: `${item.title} | ${item.plan}`,
				customerEmail: userId,
				successUrl: `${BASE_URL}${ROUTES.CHECKOUT_SUCCESS}`,
				failUrl: `${BASE_URL}${ROUTES.CEHCKOUT_FAIL}`,
			})
		} catch (error: any) {
			updateToastMessage(error.message)
		}
	}

	useEffect(() => {
		const fetchPaymentWidget = async () => {
			setIsLoadingWidget(true)
			try {
				const loadedWidget = await loadPaymentWidget(
					widgetClientKey,
					customerKey,
				)
				setPaymentWidget(loadedWidget)
			} catch (error) {
				console.error('Error fetching payment widget:', error)
			} finally {
				setIsLoadingWidget(false)
			}
		}

		fetchPaymentWidget()
	}, [customerKey, widgetClientKey])

	useEffect(() => {
		const initiateCheckout = async () => {
			setIsLoadingCheckout(true)
			try {
				const checkoutResponse = await checkoutProduct({
					id: Number(id),
					coupon: checkoutItem.coupon.code && checkoutItem.coupon.code,
				})
				setCheckoutData(checkoutResponse)
			} catch (error) {
				console.error('Error initiating checkout:', error)
				updateToastMessage('결제 초기화에 실패했습니다.')
				setIsInitiated(false)
			} finally {
				setIsLoadingCheckout(false)
			}
		}

		initiateCheckout()
	}, [id, checkoutItem, updateToastMessage])

	useEffect(() => {
		if (paymentWidget == null || !checkoutData) {
			return
		}

		const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
			'#payment-widget',
			{ value: Number(checkoutData.total_price) },
			{ variantKey: 'DEFAULT' },
		)

		paymentWidget.renderAgreement('#agreement', { variantKey: 'AGREEMENT' })

		paymentMethodsWidgetRef.current = paymentMethodsWidget
	}, [paymentWidget, checkoutData])

	useEffect(() => {
		const paymentMethodsWidget = paymentMethodsWidgetRef.current

		if (paymentMethodsWidget == null || !checkoutData) {
			return
		}

		paymentMethodsWidget.updateAmount(Number(checkoutData.total_price))
	}, [checkoutData])

	return (
		<Modal
			title={`${item.title} 결제`}
			children={
				<>
					{isLoadingWidget || isLoadingCheckout ? (
						<Lottie animationData={spinnerAnim} />
					) : (
						<TosspaymentsWidgetContentsContainer id="tosspayments-widget-contents-container">
							{isInitiated ? (
								<>
									<div id="payment-widget" />
									<div id="agreement" />
									<Button
										accessibleName="tosspayments-widget-contents-container"
										id="widget-checkout-button"
										appearance="accent"
										hierarchy="primary"
										stroke="filled"
										shape="rounding"
										text={`${Number(
											checkoutData?.total_price,
										).toLocaleString()}원 결제하기`}
										handleClick={handleCheckout}
									/>
								</>
							) : (
								<WarningText message="문제가 발생했습니다. 결제창을 닫고 다시 시도해 주세요. 문제가 지속되면 고객센터(5010.cs.kr@5010.tech)로 문의주세요." />
							)}
						</TosspaymentsWidgetContentsContainer>
					)}
				</>
			}
			handleClose={handleClose}
			scrollToTop={false}
		/>
	)
}
