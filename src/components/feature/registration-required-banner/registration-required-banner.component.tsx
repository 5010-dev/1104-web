import { MouseEvent } from 'react'

import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { RegistrationRequiredBannerContentsContainer } from './registration-required-banner.styles'

import Banner from '../../global/banner/banner.component'
import Chip from '../../global/chip/chip.component'

export default function RegistrationRequiredBanner() {
	const navigate = useNavigateWithScroll()

	const handleSettingStart = (e: MouseEvent<HTMLButtonElement>) =>
		navigate('/registration')

	return (
		<Banner
			children={
				<RegistrationRequiredBannerContentsContainer>
					{/* HACK: 구독한 서비스를 인자로 Chip의 텍스트로 전달 필요 */}
					<Chip
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounded3"
						text="5010 Indicator"
					/>
					<p id="banner-subheading">
						서비스를 사용하시려면 서비스 셋팅을 진행해야 합니다.
					</p>
				</RegistrationRequiredBannerContentsContainer>
			}
			buttonText="셋팅 시작하기"
			handleClick={handleSettingStart}
		/>
	)
}
