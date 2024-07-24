import { MouseEvent } from 'react'
import { ROUTES } from '../../../../routes/routes'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../../hooks/use-navigate-with-scroll'

import { FreeTrialCompleteContainer } from './free-trial-complete.styles'

import Complete from '../../../global/complete/complete.component'
import Button from '../../../global/button/button.component'

export default function FreeTrialComplete() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleGoHome = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.HOME, { replace: true })

	return (
		<FreeTrialCompleteContainer
			$deviceType={deviceType}
			id="free-trial-complete-container"
		>
			<Complete text="신청 완료되었어요!" />
			<p id="free-trial-complete-body">
				체험판 이용 가능하시도록 빠른 시일내로 5010팀에서 연락드릴게요! 이메일
				보관함, 또는 스펨 메일함을 잘 확인해 주세요.
			</p>
			<Button
				id="free-trial-complete-button"
				accessibleName="free-trial-complete-container"
				appearance="neutral"
				hierarchy="secondary"
				stroke="filled"
				shape="rounding"
				text="← 홈으로 돌아가기"
				handleClick={handleGoHome}
			/>
		</FreeTrialCompleteContainer>
	)
}
