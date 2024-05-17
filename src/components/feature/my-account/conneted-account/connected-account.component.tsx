import { ConnectedAccountProps, AccountType } from './conneted-account.types'
import { ConnectedAccountContainer } from './conneted-account.styles'

import { ReactComponent as TradingviewLogo } from '../../../../assets/logo/tradingview-logo.svg'
import { ReactComponent as DiscordLogo } from '../../../../assets/logo/discord-logo.svg'
import Button from '../../../global/button/button.component'
import Chip from '../../../global/chip/chip.component'

const ConnectedService = (accountType: AccountType) => {
	switch (accountType) {
		case 'tradingview':
			return (
				<>
					<TradingviewLogo className="logo" />
					트레이딩뷰
				</>
			)
		case 'discord':
			return (
				<>
					<DiscordLogo className="logo" />
					디스코드
				</>
			)
	}
}

export default function ConnectedAccount(props: ConnectedAccountProps) {
	const { accountType } = props

	return (
		<ConnectedAccountContainer>
			<span className="connected-account-name">
				{ConnectedService(accountType)}
				<Chip
					text="연동 전"
					appearance="neutral"
					hierarchy="secondary"
					stroke="filled"
					shape="rounded3"
				/>
			</span>
			<Button
				accessibleName="connected-account-name"
				text="연결하기"
				appearance="neutral"
				hierarchy="secondary"
				stroke="outlined"
				shape="rounding"
				size="sm"
			/>
		</ConnectedAccountContainer>
	)
}
