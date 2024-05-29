import { MouseEvent } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import {
	PaymentCompleteContainer,
	PaymentCompleteSectionContainer,
} from './payment-complete.styles'

import Button from '../../global/button/button.component'
import Complete from '../../global/complete/complete.component'
import TextLink from '../../global/text-link/text-link.component'

export default function PaymentComplete() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigate()

	const handleHome = (e: MouseEvent<HTMLSpanElement>) => navigate('/')

	const handleRegistration = (e: MouseEvent<HTMLButtonElement>) =>
		navigate('/registration')

	return (
		<PaymentCompleteContainer $deviceType={deviceType}>
			<PaymentCompleteSectionContainer
				$deviceType={deviceType}
				id="contents-container"
			>
				<Complete text="결제가 완료되었습니다." />
				<div id="button-container">
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
				</div>
			</PaymentCompleteSectionContainer>
		</PaymentCompleteContainer>
	)
}
