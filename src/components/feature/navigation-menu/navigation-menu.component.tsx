import { useState, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import { useAuthDataStore } from '../../../store/authDataStore'
import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { signOutWithCallback } from '../../../services/auth/auth-service'

import { NavigationMenuContainer } from './navigation-menu.styles'

import LoginButton from '../login-button/login-button.component'
import TextLink from '../../global/text-link/text-link.component'
import Toast from '../../global/toast/toast.component'

export default function NavigationMenu() {
	const [toastMessage, setToastMessage] = useState<string>('')

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { resetLoginUser } = useAuthDataStore()
	const { userId } = useAuthDataStore((state) => state.loginUser)

	const handleSignOut = (e: MouseEvent<HTMLSpanElement>) => {
		signOutWithCallback(
			() => {
				resetLoginUser()
				setToastMessage('성공적으로 로그아웃 되었습니다.')
			},
			(error) => setToastMessage(error),
		)
	}

	return (
		<>
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
					<>
						<p style={{ color: '#ffffff' }}>{userId}</p>
						<TextLink
							text="로그아웃"
							appearance="neutral"
							hierarchy="secondary"
							size="md"
							handleClick={handleSignOut}
						/>
					</>
				)}
			</NavigationMenuContainer>
			{toastMessage ? (
				<Toast
					text={toastMessage}
					duration={3000}
					onClose={() => setToastMessage('')}
				/>
			) : null}
		</>
	)
}
