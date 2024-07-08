import { useState, useEffect, useRef, MouseEvent } from 'react'
import {
	loadPaymentWidget,
	PaymentWidgetInstance,
} from '@tosspayments/payment-widget-sdk'
import { ROUTES } from '../../../routes/routes'
import Lottie from 'lottie-react'
import spinnerAnim from '../../../assets/lottie/spinner-anim-dark.json'

import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { usePaymentStore } from '../../../store/payment/payment.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import { checkoutProduct } from '../../../services/payment/payment-service'

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
	const { coupon, checkoutData, updateCheckoutData, resetPaymentStore } =
		usePaymentStore()
	const { updateToastMessage } = useToastMessageStore()

	const [paymentWidget, setPaymentWidget] =
		useState<PaymentWidgetInstance | null>(null)
	const [isLoadingWidget, setIsLoadingWidget] = useState<boolean>(true)
	const [isInitiated, setIsInitiated] = useState<boolean>(true)

	const paymentMethodsWidgetRef = useRef<ReturnType<
		PaymentWidgetInstance['renderPaymentMethods']
	> | null>(null)

	const BASE_URL = window.location.origin
	const widgetClientKey = process.env.REACT_APP_CLIENT_KEY

	const handleCheckout = async (e: MouseEvent<HTMLButtonElement>) => {
		try {
			if (!checkoutData?.number) {
				updateToastMessage('주문 번호가 없습니다.')
				return
			}

			await paymentWidget?.requestPayment({
				orderId: checkoutData?.number,
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
		const initializePayment = async () => {
			setIsLoadingWidget(true)

			try {
				// 먼저 checkoutProduct를 실행하여 checkoutData를 얻습니다.
				const checkoutResponse = await checkoutProduct({
					id: Number(id),
					coupon: coupon.code && coupon.code,
				})
				updateCheckoutData(checkoutResponse)

				// checkoutResponse에서 customerKey를 얻어 loadPaymentWidget을 실행합니다.
				if (checkoutResponse.user_uuid) {
					const loadedWidget = await loadPaymentWidget(
						widgetClientKey,
						checkoutResponse.user_uuid,
					)
					setPaymentWidget(loadedWidget)
				} else {
					throw new Error('사용자 UUID를 찾을 수 없습니다.')
				}

				setIsInitiated(true)
			} catch (error) {
				console.error('Error initializing payment:', error)
				updateToastMessage('결제 초기화에 실패했습니다.')
				setIsInitiated(false)
			} finally {
				setIsLoadingWidget(false)
			}
		}

		initializePayment()
	}, [id, coupon, widgetClientKey, updateToastMessage, updateCheckoutData])

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

	useEffect(() => {
		resetPaymentStore()
		return () => resetPaymentStore()
	}, [resetPaymentStore])

	return (
		<Modal
			title={`${item.title} 결제`}
			children={
				<>
					{isLoadingWidget ? (
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
