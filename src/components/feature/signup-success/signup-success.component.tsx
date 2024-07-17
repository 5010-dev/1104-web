import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAuthNavigationStore } from '../../../store/auth-navigation/auth-navigation.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'
import useNavigateAfterAuth from '../../../hooks/use-navigate-after-auth'

import { SignupReward } from './signup-success.types'
import { SignupSuccessContainer } from './signup-success.styles'

import Complete from '../../global/complete/complete.component'
import Card from '../../global/card/card.component'
import Chip from '../../global/chip/chip.component'
import Button from '../../global/button/button.component'

const signupRewards: SignupReward[] = [
	{
		heading: '5010 매매 전략 전자책 체험판',
		body: '르네상스 퀀트 솔루션의 기초가 된 매매 전략을 경험해 보세요.',
	},
	{
		heading: '르네상스 퀀트 솔루션 R&D 백서',
		body: '현재의 르네상스 퀀트 솔루션이 탄생하기까지의 과정을 담은 연구 개발 일지에요.',
	},
]

export default function SingupSuccess() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { authDestination } = useAuthNavigationStore()
	const navigate = useNavigateWithScroll()
	const navigateAfterAuth = useNavigateAfterAuth()

	const handleNavigatge = (e: MouseEvent<HTMLButtonElement>) => {
		if (authDestination) {
			navigateAfterAuth(authDestination)
		} else {
			navigate(ROUTES.HOME, { replace: true })
		}
	}

	return (
		<SignupSuccessContainer
			id="signup-success-container"
			$deviceType={deviceType}
		>
			<div id="signup-success-contents-container">
				<div id="signup-success-title-container">
					<Complete text="회원 가입이 완료되었어요!" />
					<p className="signup-success-subheading">
						가입하신 이메일 주소로 리워드 메일을 발송했어요.
					</p>
				</div>

				<ul id="signup-success-reward-ul">
					{signupRewards.map((item, index) => (
						<li key={index} className="signup-success-reward-li">
							<Chip
								className="signup-success-reward-li-chip"
								appearance="accent"
								hierarchy="primary"
								stroke="filled"
								shape="rounded3"
								size="sm"
								text={`REWARD #0${index + 1}`}
								inverted
							/>
							<p className="signup-success-reward-heading">{item.heading}</p>
							<span className="signup-success-reward-body">{item.body}</span>
						</li>
					))}
				</ul>

				<Card id="signup-success-card" hierarchy="secondary" opacity={0.025}>
					<p className="signup-success-body">
						독자님의 소중한 자금을 투자할 서비스인 만큼, 르네상스 퀀트 솔루션의
						발전 과정을 담은 리워드 자료들은 꼭 공부하고 숙지해 주세요.
					</p>
					<Button
						id="signup-success-button"
						accessibleName="signup-success-card"
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounding"
						text={authDestination ? '구매 진행하기 →' : '← 홈으로 돌아가기'}
						handleClick={handleNavigatge}
					/>
				</Card>
				<span className="signup-success-caption">
					5010.cs.kr@5010.tech 이메일을 통해 리워드 메일을 발송드릴 예정이오니
					메일함 또는 스팸 메일함을 꼭 확인해 주세요.
				</span>
			</div>
		</SignupSuccessContainer>
	)
}
