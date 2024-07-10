import { MouseEvent, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ROUTES } from '../../../../routes/routes'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { useToastMessageStore } from '../../../../store/layout/global-ui.store'
import { useLoadingStore } from '../../../../store/layout/loading.store'
import {
	confirmPayment,
	proceedPayment,
} from '../../../../services/payment/payment-service'
import useNavigateWithScroll from '../../../../hooks/use-navigate-with-scroll'

import {
	CheckoutSuccessContainer,
	CheckoutSuccessSectionContainer,
} from './checkout-success.styles'

import Button from '../../../../components/global/button/button.component'
import Complete from '../../../../components/global/complete/complete.component'
import Loading from '../../../../components/global/loading/loading.component'
// import TextLink from '../../global/text-link/text-link.component'

export default function CheckoutSuccess() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateToastMessage } = useToastMessageStore()
	const { updateIsLoading } = useLoadingStore()
	const navigate = useNavigateWithScroll()
	const [searchParams] = useSearchParams()
	const [isValid, setIsValid] = useState<boolean>(false)

	const handleHome = (e: MouseEvent<HTMLSpanElement>) => navigate(ROUTES.HOME)

	// const handleRegistration = (e: MouseEvent<HTMLButtonElement>) =>
	// 	navigate(ROUTES.REGISTRATION)

	const paymentKey = searchParams.get('paymentKey')
	const orderId = searchParams.get('orderId')
	const amount = searchParams.get('amount')

	useEffect(() => {
		if (!paymentKey || !orderId || !amount) {
			updateToastMessage('잘못된 요청입니다.')
			navigate(ROUTES.HOME)
			return
		}

		const fetchPaymentConfirm = async () => {
			try {
				updateIsLoading(true)

				const { code, pg_data } = await confirmPayment({
					payment_key: paymentKey,
					order_number: orderId,
					total_price: amount,
				})

				if (code === 200) {
					const response = await proceedPayment({
						number: orderId,
						pg_data: pg_data,
					})

					if (response === 201) {
						setIsValid(true)
					}
				}
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
			}
		}
		fetchPaymentConfirm()
	}, [
		paymentKey,
		orderId,
		amount,
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
						<Complete text="결제가 완료되었어요!" />
						<p className="checkout-success-subheading">
							원활한 서비스 초기 셋팅을 위해 독자님께 전담 배정된 트레이딩
							어드바이저가 직접 연락드릴 예정이에요.
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
