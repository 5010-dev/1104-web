import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { NotFoundContainer } from './not-found.styles'

import Button from '../../../components/global/button/button.component'

export default function NotFound() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleGoHome = (e: MouseEvent<HTMLButtonElement>) => navigate('/')

	return (
		<NotFoundContainer $deviceType={deviceType}>
			<div id="title-text-container">
				<div id="display-text-container">
					<h1 id="display">404</h1>
				</div>
				<h3 id="heading3">PAGE NOT FOUND</h3>
			</div>
			<div id="button-text-container">
				<p id="body">
					찾으시는 페이지가 삭제, 또는 이름이 변경되었거나
					<br />
					일시적으로 사용할 수 없는 상태입니다.
				</p>
				<Button
					accessibleName="button-text-container"
					text="← 홈화면으로 돌아가기"
					appearance="neutral"
					hierarchy="secondary"
					stroke="outlined"
					shape="rounding"
					handleClick={handleGoHome}
				/>
			</div>
		</NotFoundContainer>
	)
}
