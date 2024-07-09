import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { RegistrationRequiredBannerContentsContainer } from './registration-required-banner.styles'

import Banner from '../../global/banner/banner.component'
import Button from '../../global/button/button.component'

export default function RegistrationRequiredBanner() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleSettingStart = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.REGISTRATION)

	return (
		<Banner
			hierarchy="primary"
			children={
				<RegistrationRequiredBannerContentsContainer $deviceType={deviceType}>
					<div id="banner-first-column">
						<FontAwesomeIcon icon={faCircleExclamation} id="banner-icon" />
						<p id="banner-subheading">
							구독하신 서비스를 이용하려면 초기 셋팅이 필요해요.
						</p>
					</div>
					<Button
						accessibleName="banner-container"
						id="banner-button"
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounding"
						size="sm"
						text="셋팅 시작하기"
						handleClick={handleSettingStart}
					/>
				</RegistrationRequiredBannerContentsContainer>
			}
		/>
	)
}
