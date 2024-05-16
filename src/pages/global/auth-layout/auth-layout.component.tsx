import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet-async'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { AuthLayoutProps } from './auth-layout.types'
import { AuthLayoutContainer, AuthGlobalStyle } from './auth-layout.styles'

import logoUrl from '../../../assets/logo/1104-logo-white.svg'
import Card from '../../../components/global/card/card.component'

export default function AuthLayout(props: AuthLayoutProps) {
	const { children } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigate()

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	return (
		<AuthLayoutContainer $deviceType={deviceType}>
			<Helmet>
				<meta name="theme-color" content="#000000" />
			</Helmet>
			<AuthGlobalStyle />
			<Card
				id="login-card"
				appearance="neutral"
				hierarchy="primary"
				stroke="filled"
				shape="rounded2"
				opacity={1}
			>
				<div id="top-row">
					<img id="company-logo" src={logoUrl} alt="company-logo" />
					<button id="close-icon" aria-label="top-row" onClick={handleClose}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
				</div>
				{children}
			</Card>
			<div id="login-panel"></div>
		</AuthLayoutContainer>
	)
}
