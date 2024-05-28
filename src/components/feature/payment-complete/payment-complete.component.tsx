import { MouseEvent } from 'react'

import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import completeAnim from '../../../assets/lottie/complete-anim.json'
import Button from '../../global/button/button.component'

import {
	PaymentCompleteContainer,
	PaymentCompleteSectionContainer,
} from './payment-complete.styles'
import TextLink from '../../global/text-link/text-link.component'

export default function PaymentComplete() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigate()

	const handleHome = (e: MouseEvent<HTMLSpanElement>) => navigate('/')

	return (
		<PaymentCompleteContainer $deviceType={deviceType}>
			<PaymentCompleteSectionContainer
				$deviceType={deviceType}
				id="contents-container"
			>
				<div id="anim-container">
					<Lottie animationData={completeAnim} id="lottie-anim" loop={false} />
					<h1 id="heading">결제가 완료되었습니다.</h1>
				</div>
				<div id="button-container">
					<Button
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						text="인디케이터 셋팅 시작하기 →"
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						description="나중에 셋팅하고"
						text="홈으로 돌아가기"
						handleClick={handleHome}
					/>
				</div>
			</PaymentCompleteSectionContainer>
		</PaymentCompleteContainer>
	)
}
