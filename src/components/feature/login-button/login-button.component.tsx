import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentStroke,
} from '../../../styles/design-system/design-system.types'
import { LoginButtonProps } from './login-button.types'

import Button from '../../global/button/button.component'

export default function LoginButton(props: LoginButtonProps) {
	const { className, id, accessibleName, signUp } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleButtonClick = () => {
		if (signUp) {
			window.scrollTo({
				top: 0,
			})
			navigate('/login', { routeState: 'signup' })
		} else {
			window.scrollTo({
				top: 0,
			})
			navigate('/login', { routeState: 'login' })
		}
	}

	const getButtonVariants = () => {
		if (signUp) {
			return {
				text: '회원 가입',
				appearance: 'accent' as ComponentAppearance,
				hierarchy: 'primary' as ComponentHierarchy,
				stroke: 'filled' as ComponentStroke,
			}
		} else {
			return {
				text: '로그인',
				appearance: 'neutral' as ComponentAppearance,
				hierarchy: 'secondary' as ComponentHierarchy,
				stroke: 'outlined' as ComponentStroke,
			}
		}
	}

	return (
		<Button
			className={className}
			id={id}
			accessibleName={accessibleName}
			size={deviceType === 'desktop' ? 'md' : 'md'}
			handleClick={handleButtonClick}
			text={getButtonVariants().text}
			appearance={getButtonVariants().appearance}
			hierarchy={getButtonVariants().hierarchy}
			stroke={getButtonVariants().stroke}
			shape="rounding"
		/>
	)
}
