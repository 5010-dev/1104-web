import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { FreeTrialTopBarContainer } from './free-trial-top-bar.styles'

import { ReactComponent as Logo } from '../../../assets/logo/5010-logo-white.svg'

export default function FreeTrialTopBar() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleClose = (e: MouseEvent<HTMLButtonElement>) => navigate(-1)

	const handleLogoClick = (e: MouseEvent<HTMLOrSVGElement>) =>
		navigate(ROUTES.HOME)

	return (
		<FreeTrialTopBarContainer $deviceType={deviceType} id="free-trial-top-bar">
			<Logo id="logo" onClick={handleLogoClick} />
			<button id="close-icon" aria-label="top-row" onClick={handleClose}>
				<FontAwesomeIcon icon={faXmark} />
			</button>
		</FreeTrialTopBarContainer>
	)
}
