import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { ReactComponent as Logo } from '../../../assets/logo/1104-logo-white.svg'
import { NavigationContainer } from './navigation.styles'

export default function Navigation() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const handleClick = (): void => {
		console.log('menu cliecked')
	}

	return (
		<NavigationContainer $deviceType={deviceType}>
			<div className="nav-bar-container" id="nav-bar-left-container">
				<Logo id="logo" />
			</div>
			<div className="nav-bar-container" id="nav-bar-right-container">
				{deviceType !== 'desktop' ? (
					<button id="menu-icon">
						<FontAwesomeIcon icon={faBars} onClick={handleClick} />
					</button>
				) : null}
			</div>
		</NavigationContainer>
	)
}
