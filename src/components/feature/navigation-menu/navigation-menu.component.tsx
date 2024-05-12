import { Link } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { NavigationMenuContainer } from './navigation-menu-styles'

import LoginButton from '../login-button/login-button.component'

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
				<LoginButton
					className="user-button"
					id="sign-in-button"
					accessibleName="user-buttons-container"
					signUp={false}
				/>
				<LoginButton
					className="user-button"
					id="sign-up-button"
					accessibleName="user-buttons-container"
					signUp={true}
				/>
			</div>
		</NavigationMenuContainer>
	)
}
