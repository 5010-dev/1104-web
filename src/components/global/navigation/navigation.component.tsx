import { ReactComponent as Logo } from '../../../assets/logo/1104-logo-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { NavigationContainer } from './navigation.styles'

export default function Navigation() {
	const handleClick = (): void => {
		console.log('menu cliecked')
	}

	return (
		<NavigationContainer>
			<div className="nav-bar-container" id="nav-bar-left-container">
				<Logo id="logo" />
			</div>
			<div className="nav-bar-container" id="nav-bar-right-container">
				<button id="menu-icon">
					<FontAwesomeIcon icon={faBars} onClick={handleClick} />
				</button>
			</div>
		</NavigationContainer>
	)
}
