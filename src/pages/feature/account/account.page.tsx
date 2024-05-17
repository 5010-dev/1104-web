import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAuthDataStore } from '../../../store/authDataStore'

import { AccountContainer } from './account.styles'

import { ReactComponent as TradingviewLogo } from '../../../assets/logo/tradingview-logo.svg'
import { ReactComponent as DiscordLogo } from '../../../assets/logo/discord-logo.svg'

export default function Account() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const navigate = useNavigate()

	useEffect(() => {
		if (userId.length === 0) {
			navigate('/')
		}
	}, [userId, navigate])

	return (
		<AccountContainer $deviceType={deviceType}>
			<div id="contents-container">
				<h1 id="heading">내 정보</h1>
				<div id="account-info-container">
					<div className="container-row">
						<h2 className="heading-2">아이디</h2>
						<p className="body">{userId}</p>
					</div>
					<hr />
					<div className="container-row">
						<h2 className="heading-2">연결된 계정</h2>
						<span>
							<TradingviewLogo className="logo" />
							트레이딩뷰
						</span>
						<span>
							<DiscordLogo className="logo" />
							디스코드
						</span>
					</div>
					<hr />
					<div className="container-row">
						<h2 className="heading-2">구독 정보</h2>
						<p className="body">구독중인 서비스가 없습니다.</p>
					</div>
				</div>
			</div>
		</AccountContainer>
	)
}
