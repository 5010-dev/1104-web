import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { CheckoutOptionContainer } from './checkout-option.styles'

export default function CheckoutOption() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CheckoutOptionContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">주문 관련 상품 정보</h2>
				<div className="checkout-option-container">
					<h3 className="heading-3">평생 이용</h3>
					<ul id="checkout-options-list">
						<li className="body-sm">
							주문 요청 후, 자세한 결제 정보는 입력하신 주문자 정보를 통해
							전달드립니다.
						</li>
						<li className="body-sm">
							주문 진행 상황은 '내 정보' 페이지에서 확인하실 수 있습니다.
						</li>
						<li className="body-sm">
							결제가 완료되면 초기 셋팅이 진행되며, 셋팅 완료 시점부터 바로 이용
							가능합니다.
						</li>
						<li className="body-sm">
							서비스 셋팅 상태는 구매 후 '내 정보' 페이지에서 확인하실 수
							있습니다.
						</li>
					</ul>
				</div>
			</div>
		</CheckoutOptionContainer>
	)
}
