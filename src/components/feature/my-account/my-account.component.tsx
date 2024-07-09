import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useLoadingStore } from '../../../store/layout/loading.store'
import { useToastMessageStore } from '../../../store/layout/global-ui.store'
import { sendPasswordResetVerification } from '../../../services/auth/auth-service'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'
import { getAccessToken } from '../../../utils/token.utils'

import { MyAccountProps } from './my-account.types'
import { MyAccountContainer } from './my-account.styles'

import Button from '../../global/button/button.component'
// import ConnectedAccount from './conneted-account/connected-account.component'

export default function MyAccount(props: MyAccountProps) {
	const { userId } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { updateIsLoading } = useLoadingStore()
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	const handleResetPassword = async (e: MouseEvent) => {
		try {
			updateIsLoading(true)

			await sendPasswordResetVerification(getAccessToken())
			updateToastMessage(
				'가입하신 이메일로 비밀번호 변경 인증 코드를 전송했습니다.',
			)
			navigate(`${ROUTES.VERIFICATION}?email=${userId}`, {
				replace: true,
				routeState: 'password-reset',
			})
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	return (
		<MyAccountContainer $deviceType={deviceType}>
			<div className="container-row">
				<h2 className="heading-2">아이디</h2>
				<div className="item-row" id="my-account-container-row">
					<p className="body">{userId}</p>
					<Button
						id="change-password-button"
						accessibleName="account-info-container"
						text="비밀번호 변경"
						appearance="neutral"
						hierarchy="secondary"
						stroke="outlined"
						shape="rounding"
						size="sm"
						handleClick={handleResetPassword}
					/>
				</div>
			</div>
			{/* <hr />
			<div className="container-row">
				<h2 className="heading-2">연결된 계정</h2>
				<ConnectedAccount accountType="tradingview" />
				<ConnectedAccount accountType="discord" />
			</div> */}
		</MyAccountContainer>
	)
}
