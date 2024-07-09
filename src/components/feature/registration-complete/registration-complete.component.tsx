import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Complete from '../../global/complete/complete.component'

import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'
import { useAuthDataStore } from '../../../store/data/auth-data/auth-data.store'

import { RgistrationCompleteContainer } from './registration-complete.styles'

import Button from '../../global/button/button.component'
import Community from '../community/community.component'
import Card from '../../global/card/card.component'

export default function RegistrationComplete() {
	const navigate = useNavigateWithScroll()
	const userId = useAuthDataStore((state) => state.loginUser.userId)

	const handleGoHome = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.HOME)

	const handleSeeDetails = (e: MouseEvent<HTMLDivElement>) =>
		window.open(
			'https://receptive-sleep-5a8.notion.site/5010-INDICATOR-ac35b5b5cc7044a58de9f3a2016bcd21?pvs=74',
			'_blank',
			'noopener,noreferrer',
		)

	const handleSeeProgress = (e: MouseEvent<HTMLDivElement>) =>
		navigate(ROUTES.ACCOUNT, { replace: true })

	return (
		<RgistrationCompleteContainer>
			<Complete text="셋팅 신청이 완료되었습니다." />
			<p id="body">
				등록하신 정보로 셋팅 진행 후, 완료시 로그인 이메일({userId})을 통해
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
			<div id="banners-container">
				<Card
					hierarchy="secondary"
					id="see-details-banner"
					handleClick={handleSeeDetails}
				>
					<p id="banner-body">
						셋팅이 진행되는 동안 <br />
						<span>5010 인디케이터 자세히 살펴보기</span>
					</p>
					<FontAwesomeIcon icon={faAngleRight} id="see-details-banner-icon" />
				</Card>
				<Card
					hierarchy="secondary"
					id="see-details-banner"
					handleClick={handleSeeProgress}
				>
					<p id="banner-body">
						5010 인디케이터 셋팅 <br />
						<span>진행상황 살펴보기</span>
					</p>
					<FontAwesomeIcon icon={faAngleRight} id="see-details-banner-icon" />
				</Card>
				<div id="community-container">
					<Community />
				</div>
			</div>
		</RgistrationCompleteContainer>
	)
}
