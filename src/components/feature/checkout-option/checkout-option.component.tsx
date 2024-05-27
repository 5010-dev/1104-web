import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'

import { CheckoutOptionContainer } from './checkout-option.styles'

export default function CheckoutOption() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)

	return (
		<CheckoutOptionContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">구독 주기</h2>
				<div className="checkout-option-container">
					<h3 className="heading-3">1개월 간격 고정 구독</h3>
					<p className="body-sm">
						다음 예상 결제일은 30일 뒤 입니다. <br /> 구독일정 확인 및 구독
						취소는 내 정보 → 구독중인 서비스에서 확인 가능합니다.
					</p>
				</div>
			</div>
			<hr />
			<div className="container-row">
				<h2 className="heading-2">주문자 정보</h2>
				<div className="checkout-option-container">
					<h3 className="heading-3">{userId}</h3>
				</div>
			</div>
		</CheckoutOptionContainer>
	)
}
