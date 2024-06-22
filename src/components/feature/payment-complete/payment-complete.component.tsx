import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import {
	PaymentCompleteContainer,
	PaymentCompleteSectionContainer,
} from './payment-complete.styles'

import Button from '../../global/button/button.component'
import Complete from '../../global/complete/complete.component'
// import TextLink from '../../global/text-link/text-link.component'

export default function PaymentComplete() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleHome = (e: MouseEvent<HTMLSpanElement>) => navigate(ROUTES.HOME)

	// const handleRegistration = (e: MouseEvent<HTMLButtonElement>) =>
	// 	navigate(ROUTES.REGISTRATION)

	return (
		<PaymentCompleteContainer $deviceType={deviceType}>
			<PaymentCompleteSectionContainer
				$deviceType={deviceType}
				id="contents-container"
			>
				<div id="checkout-complete-title-container">
					<Complete text="결제가 완료되었어요!" />
					<p className="checkout-complete-subheading">
						원활한 서비스 초기 셋팅을 위해 독자님께 전담 배정된 트레이딩
						어드바이저가 직접 연락드릴 예정이에요.
					</p>
				</div>
				<div id="checkout-complete-body-container">
					<p className="checkout-complete-body">
						5010.cs.kr@5010.tech 이메일을 통해 로그인 이메일로 메뉴얼을 동봉하여
						발송드릴 예정이오니 메일함 또는 스팸 메일함을 꼭 확인해 주세요.
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
			</PaymentCompleteSectionContainer>
		</PaymentCompleteContainer>
	)
}
