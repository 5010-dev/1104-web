import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { RegistrationRequiredBannerContentsContainer } from './registration-required-banner.styles'

import Banner from '../../global/banner/banner.component'
import Button from '../../global/button/button.component'

export default function RegistrationRequiredBanner() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleSettingStart = (e: MouseEvent<HTMLButtonElement>) =>
		navigate('/registration')

	return (
		<Banner
			hierarchy="primary"
			children={
				<RegistrationRequiredBannerContentsContainer $deviceType={deviceType}>
					<div id="banner-first-column">
						<FontAwesomeIcon icon={faCircleExclamation} id="banner-icon" />
						<p id="banner-subheading">
							구독하신 서비스를 이용하시려면 초기 셋팅을 진행하셔야 합니다.
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
