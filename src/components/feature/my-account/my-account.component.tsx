import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { MyAccountProps } from './my-account.types'
import { MyAccountContainer } from './my-account.styles'

import Button from '../../global/button/button.component'
import ConnectedAccount from './conneted-account/connected-account.component'

export default function MyAccount(props: MyAccountProps) {
	const { userId } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<MyAccountContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">아이디</h2>
				<div className="item-row">
					<p className="body">{userId}</p>
					<Button
						accessibleName="account-info-container"
						text="비밀번호 변경"
						appearance="neutral"
						hierarchy="secondary"
						stroke="outlined"
						shape="rounding"
						size="sm"
					/>
				</div>
			</div>
			<hr />
			<div className="container-row">
				<h2 className="heading-2">연결된 계정</h2>
				<ConnectedAccount accountType="tradingview" />
				<ConnectedAccount accountType="discord" />
			</div>
		</MyAccountContainer>
	)
}
