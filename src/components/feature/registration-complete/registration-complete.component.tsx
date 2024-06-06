import { MouseEvent } from 'react'

import Complete from '../../global/complete/complete.component'

import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'
import { useAuthDataStore } from '../../../store/authDataStore'

import { RgistrationCompleteContainer } from './registration-complete.styles'

import Button from '../../global/button/button.component'
import Community from '../community/community.component'

export default function RegistrationComplete() {
	const navigate = useNavigateWithScroll()
	const userId = useAuthDataStore((state) => state.loginUser.userId)

	const handleGoHome = (e: MouseEvent<HTMLButtonElement>) => navigate('/')

	return (
		<RgistrationCompleteContainer>
			<Complete text="셋팅 신청이 완료되었습니다." />
			<p id="body">
				등록하신 정보로 셋팅 진행 후, 로그인 이메일({userId})을 통해
				안내드리겠습니다.
			</p>
			<Button
				id="go-home-button"
				appearance="neutral"
				hierarchy="secondary"
				stroke="filled"
				shape="rounding"
				text="← 홈으로 돌아가기"
				handleClick={handleGoHome}
			/>
			<div id="community-container">
				<Community />
			</div>
		</RgistrationCompleteContainer>
	)
}
