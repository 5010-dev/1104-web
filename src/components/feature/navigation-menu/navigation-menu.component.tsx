import { Link } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { NavigationMenuContainer } from './navigation-menu-styles'

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
		</NavigationMenuContainer>
	)
}
