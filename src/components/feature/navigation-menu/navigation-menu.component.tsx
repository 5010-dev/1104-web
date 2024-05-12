import { Link } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { NavigationMenuContainer } from './navigation-menu-styles'

import Button from '../../global/button/button.component'

export default function NavigationMenu() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<NavigationMenuContainer $deviceType={deviceType}>
			<Link className="menu-link" to="/">
				<span>ABOUT</span>
			</Link>
			<Link className="menu-link" to="/">
				<span>SERVICE</span>
			</Link>
			<Link className="menu-link" to="/">
				<span>PRICING</span>
			</Link>
			<Link className="menu-link" to="/">
				<span>PARTNERSHIP</span>
			</Link>
			<div id="user-buttons-container">
				<Button
					className="user-button"
					id="sign-in-button"
					accessibleName="user-buttons-container"
					text="로그인"
					appearance="neutral"
					hierarchy="secondary"
					stroke="outlined"
					shape="rounding"
					size={deviceType === 'desktop' ? 'sm' : 'md'}
				/>
				<Button
					className="user-button"
					id="sign-up-button"
					accessibleName="user-buttons-container"
					text="회원가입"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					size={deviceType === 'desktop' ? 'sm' : 'md'}
				/>
			</div>
		</NavigationMenuContainer>
	)
}
