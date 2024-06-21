import { MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../../routes/routes'

import { useAuthDataStore } from '../../../store/authDataStore'
import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useScrollStore } from '../../../store/globalUiStore'

import { NavigationMenuContainer } from './navigation-menu.styles'

import LoginButton from '../login-button/login-button.component'
import LoginUser from '../login-user/login-user.component'

export default function NavigationMenu() {
	const location = useLocation()
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const updateScrollState = useScrollStore((state) => state.updateScrollState)

	const scrollToSubscription = () => {
		location.pathname === ROUTES.HOME
			? updateScrollState('isSamePage', true)
			: updateScrollState('isSamePage', false)
		updateScrollState('isScrollToSubscription', true)
	}

	const handleClick = (e: MouseEvent<HTMLAnchorElement>) =>
		window.scrollTo({ top: 0 })

	return (
		<NavigationMenuContainer $deviceType={deviceType}>
			<Link className="menu-link" to={ROUTES.ABOUT} onClick={handleClick}>
				<span>ABOUT</span>
			</Link>
			<Link className="menu-link" to={ROUTES.SERVICE} onClick={handleClick}>
				<span>SERVICE</span>
			</Link>
			<Link
				className="menu-link"
				to={ROUTES.HOME}
				onClick={scrollToSubscription}
			>
				<span>PRICING</span>
			</Link>
			<Link className="menu-link" to={ROUTES.PARTNERSHIP} onClick={handleClick}>
				<span>PARTNERSHIP</span>
			</Link>
			{userId.length === 0 ? (
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
			) : (
				<LoginUser />
			)}
		</NavigationMenuContainer>
	)
}
