// import { useState, MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'

import { CheckoutOptionContainer } from './checkout-option.styles'

// import TermsModal from '../../global/terms-modal/terms-modal.component'

export default function CheckoutOption() {
	// const [showTerms, setShowTerms] = useState<boolean>(false)

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)

	// const toggleShowTerms = (e: MouseEvent<HTMLSpanElement> | KeyboardEvent) =>
	// 	setShowTerms((state) => !state)

	return (
		<CheckoutOptionContainer $deviceType={deviceType}>
			{/* {showTerms ? (
				<TermsModal
					title="환불 정책 전체보기"
					terms="refundPolicy"
					handleClose={(e) => toggleShowTerms(e)}
				/>
			) : null} */}

			<div className="container-row">
				<h2 className="heading-2">주문 관련 상품 정보</h2>
				<div className="checkout-option-container">
					<h3 className="heading-3">31일간 이용 가능</h3>
					<ul id="checkout-options-list">
						<li className="body-sm">
							서비스는 결제일로부터 31일간 사용 가능합니다.
						</li>
						<li className="body-sm">
							사용 기간 종료 이후에는 재구매를 통해 서비스를 계속해서 이용할 수
							있습니다.
						</li>
						<li className="body-sm">
							첫 구매 이후 재구매 시에는 초기 설치 비용을 제외한 비용만
							청구됩니다.
						</li>
						{/* <li className="body-sm">
							주문 후 7일 이내에 취소하는 경우 전액 환불됩니다. 그 외 자세한
							환불 관련 내용은 환불 정책 전문을 참고해 주세요.{' '}
							<span onClick={toggleShowTerms}>환불 정책 전체보기</span>
						</li> */}
					</ul>
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
