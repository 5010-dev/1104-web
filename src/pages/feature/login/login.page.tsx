import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { LoginContainer } from './login.styles'

import Input from '../../../components/global/input/input.component'

export default function Login() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<LoginContainer $deviceType={deviceType}>
			<Input
				hierarchy="secondary"
				isValid={false}
				placeholder="이메일 주소를 입력해 주세요."
			/>
		</LoginContainer>
	)
}
