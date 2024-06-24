import { useState, useEffect, MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'
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
import TosspaymentsWidgetModal from '../../../components/feature/tosspayments-widget-modal/tosspayments-widget-modal.component'

export default function Checkout() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { isUserDataLoaded } = useAuthDataStore()
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const service = useServiceDataStore((state) => state.service)
	const { checkoutItem } = usePaymentStore()
	const navigate = useNavigateWithScroll()
	const [searchParams] = useSearchParams()

	const [item, setItem] = useState<Service>()
	const [showModal, setShowModal] = useState<boolean>(false)

	const id = searchParams.get('id')
	// const name = searchParams.get('name')
	// const plan = searchParams.get('plan')

	const handleClose = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.HOME)

	const toggleModal = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => {
		setShowModal((state) => !state)
	}

	// 페이지 초기화 및 userId가 잘못되었거나 제품 id가 제공되지 않았을 때, 메인 화면으로 리디렉션
	useEffect(() => {
		window.scrollTo({ top: 0 })

		if (isUserDataLoaded) {
			if (userId.length === 0 || !id) {
				updateToastMessage('잘못된 요청입니다.')
				navigate(ROUTES.HOME)
				return
			}

			const numberedId = Number(id)

			// HACK: D2C에서 5010 매매 전략 판매 전까지 강제 리디렉션 처리
			if (numberedId === 0 || numberedId === 999) {
				updateToastMessage('서비스를 찾을 수 없습니다.')
				navigate(ROUTES.HOME)
			}

			const foundItem = service.find((item) => item.id === numberedId)

			if (foundItem) {
				setItem(foundItem)
			} else {
				updateToastMessage('서비스를 찾을 수 없습니다.')
				navigate(ROUTES.HOME)
			}
		}
	}, [userId, navigate, updateToastMessage, isUserDataLoaded, id, service])

	return (
		<>
			{item && showModal ? (
				<TosspaymentsWidgetModal
					id={Number(id)}
					item={item}
					handleClose={toggleModal}
				/>
			) : null}
			<CheckoutContainer $deviceType={deviceType}>
				{item ? (
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
								<CheckoutItem item={item} />
								<CheckoutOption />
								<CheckoutCodeInput />
							</div>
							<div className="item-column" id="right-column">
								<h2 className="column-heading">결제 정보</h2>
								<CheckoutBilling
									item={item}
									discount={checkoutItem.discount && checkoutItem.discount}
								/>
								<CheckoutTerms handleCheckout={toggleModal} />
							</div>
						</div>
					</div>
				) : null}
			</CheckoutContainer>
			<Footer />
		</>
	)
}
