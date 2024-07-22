import { MouseEvent, useState, useEffect } from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'
import { ROUTES } from '../../../../routes/routes'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { useToastMessageStore } from '../../../../store/layout/global-ui.store'
import { useLoadingStore } from '../../../../store/layout/loading.store'
import useNavigateWithScroll from '../../../../hooks/use-navigate-with-scroll'

import {
	CheckoutSuccessContainer,
	CheckoutSuccessSectionContainer,
} from './checkout-success.styles'

import Chip from '../../../../components/global/chip/chip.component'
import Button from '../../../../components/global/button/button.component'
import Complete from '../../../../components/global/complete/complete.component'
import Loading from '../../../../components/global/loading/loading.component'
// import TextLink from '../../global/text-link/text-link.component'

export default function CheckoutSuccess() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateToastMessage } = useToastMessageStore()
	const { updateIsLoading } = useLoadingStore()
	const navigate = useNavigateWithScroll()
	const location = useLocation()
	const [searchParams] = useSearchParams()
	const [isValid, setIsValid] = useState<boolean>(false)

	const handleHome = (e: MouseEvent<HTMLSpanElement>) => navigate(ROUTES.HOME)

	// const handleRegistration = (e: MouseEvent<HTMLButtonElement>) =>
	// 	navigate(ROUTES.REGISTRATION)

	const orderNumber = searchParams.get('order_number')
	const paymentStatus = searchParams.get('payment_status')

	useEffect(() => {
		if (!orderNumber || !paymentStatus || location.key === 'default') {
			updateToastMessage('잘못된 요청입니다.')
			navigate(ROUTES.HOME)
			return
		}

		const fetchPaymentConfirm = async () => {
			try {
				updateIsLoading(true)
				setIsValid(false)
			} catch (error) {
				if (error instanceof Error) {
					updateToastMessage(error.message)
				} else {
					updateToastMessage(
						'알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.',
					)
				}
				navigate(ROUTES.HOME)
			} finally {
				updateIsLoading(false)
				setIsValid(true)
			}
		}
		fetchPaymentConfirm()
	}, [
		location,
		orderNumber,
		paymentStatus,
		navigate,
		updateToastMessage,
		updateIsLoading,
	])

	return (
		<CheckoutSuccessContainer $deviceType={deviceType}>
			{isValid ? (
				<CheckoutSuccessSectionContainer
					$deviceType={deviceType}
					id="contents-container"
				>
					<div id="checkout-success-title-container">
						<Complete text="주문이 접수되었어요!" />
						<Chip
							appearance="neutral"
							hierarchy="secondary"
							text={`주문 번호: ${orderNumber}`}
						/>
						<p className="checkout-success-subheading">
							조금만 기다리시면 이메일로 입금 계좌 및 할인 혜택, 그리고 주문
							정보를 발송해 드릴거에요.
						</p>
					</div>
					<div id="checkout-success-body-container">
						<p className="checkout-success-body">
							5010.cs.kr@5010.tech 이메일을 통해 로그인 이메일로 메뉴얼을
							동봉하여 발송드릴 예정이오니 메일함 또는 스팸 메일함을 꼭 확인해
							주세요.
						</p>
					</div>
					<Button
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounding"
						text="← 홈으로 돌아가기"
						handleClick={handleHome}
					/>
					{/* NOTE: 추후 서비스 세팅 자동화 기능 추가시 사용 */}
					{/* <div id="button-container">
					<Button
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						text="인디케이터 셋팅 시작하기 →"
						handleClick={handleRegistration}
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						description="나중에 셋팅하고"
						text="홈으로 돌아가기"
						handleClick={handleHome}
					/>
				</div> */}
				</CheckoutSuccessSectionContainer>
			) : (
				<Loading />
			)}
		</CheckoutSuccessContainer>
	)
}
