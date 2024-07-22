import { useState, useEffect, MouseEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import { usePaymentStore } from '../../../store/payment/payment.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { getProductById } from '../../../services/product/product-service'
import { checkoutProduct } from '../../../services/payment/payment-service'
import { Product } from '../../../services/product/product-service.types'

import { CheckoutContainer } from './checkout.styles'

import CheckoutItem from '../../../components/feature/checkout-item/checkout-item.component'
import CheckoutOption from '../../../components/feature/checkout-option/checkout-option.component'
// import CheckoutCodeInput from '../../../components/feature/checkout-code-input/checkout-code-input.component'
// import CheckoutBilling from '../../../components/feature/checkout-billing/checkout-billing.component'
import CheckoutTerms from '../../../components/feature/checkout-terms/checkout-terms.component'
import Footer from '../../../components/global/footer/footer.component'

export default function Checkout() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { isUserDataLoaded } = useAuthDataStore()
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const {
		coupon,
		// discount,
		updateCheckoutData,
		resetPaymentStore,
	} = usePaymentStore()
	const { updateIsLoading } = useLoadingStore()
	const navigate = useNavigateWithScroll()
	const [searchParams] = useSearchParams()

	const [item, setItem] = useState<Product>()
	const [showModal, setShowModal] = useState<boolean>(false)

	const id = searchParams.get('id')

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	const toggleModal = async (
		e: MouseEvent<HTMLButtonElement> | KeyboardEvent,
	) => {
		if (!showModal) {
			try {
				updateIsLoading(true)
				const checkoutResponse = await checkoutProduct({
					id: Number(id),
					coupon: coupon.code && coupon.code,
				})
				updateCheckoutData(checkoutResponse)

				setShowModal(true)
			} catch (error) {
				console.error('Error creating order:', error)
				updateToastMessage('주문 생성 중 오류가 발생했습니다.')
			} finally {
				updateIsLoading(false)
			}
		} else {
			setShowModal(false)
		}
	}

	// 페이지 초기화 및 userId가 잘못되었거나 제품 id가 제공되지 않았을 때, 메인 화면으로 리디렉션
	useEffect(() => {
		window.scrollTo({ top: 0 })
		resetPaymentStore()

		if (isUserDataLoaded) {
			if (userId.length === 0 || !id) {
				updateToastMessage('잘못된 요청입니다.')
				navigate(ROUTES.HOME)
				return
			}

			const numberedId = Number(id)

			// 체험판의 경우 리디렉션 처리
			if (numberedId === 1) {
				updateToastMessage('서비스를 찾을 수 없습니다.')
				navigate(ROUTES.HOME)
				return
			}

			const fetchProductData = async () => {
				try {
					updateIsLoading(true)
					const foundItem = await getProductById(numberedId)

					if (foundItem) {
						if (foundItem.is_subscribed) {
							updateToastMessage('이미 이용중인 서비스 입니다.')
							navigate(ROUTES.HOME)
							return
						}
						setItem(foundItem)
					} else {
						updateToastMessage('서비스를 찾을 수 없습니다.')
						navigate(ROUTES.HOME)
					}
				} catch (error: any) {
					updateToastMessage(error)
				} finally {
					updateIsLoading(false)
				}
			}
			fetchProductData()
		}

		return () => resetPaymentStore()
	}, [
		userId,
		navigate,
		updateToastMessage,
		isUserDataLoaded,
		id,
		updateIsLoading,
		resetPaymentStore,
	])

	return (
		<>
			{item && showModal ? (
				// <TosspaymentsWidgetModal handleClose={toggleModal} />
				// TODO: 여기에 주문 확인 모달 등장 필요
				<></>
			) : null}
			<CheckoutContainer $deviceType={deviceType}>
				{item ? (
					<div id="contents-container">
						<div id="top-row">
							<h1 id="heading">주문 요청</h1>
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
								{/* <CheckoutCodeInput /> */}
								{/* <CheckoutTerms handleCheckout={toggleModal} /> */}
							</div>
							<div className="item-column" id="right-column">
								<h2 className="column-heading">약관 동의</h2>
								{/* <CheckoutBilling
									item={item}
									discount={
										discount.price ? discount.price : discount.percentage
									}
								/> */}
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
