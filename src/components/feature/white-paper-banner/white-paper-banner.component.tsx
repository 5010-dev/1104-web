import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { openWhitePaper } from '../../../utils/external-links.utils'

import { WhitePaperBannerContainer } from './white-paper-banner.styles'

import backgroundImg from '../../../assets/img/spark-img.webp'
import Button from '../../global/button/button.component'

export default function WhitePaperBanner() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const handleSeeWhitePaper = (e: MouseEvent<HTMLButtonElement>) =>
		openWhitePaper()

	return (
		<WhitePaperBannerContainer
			className="white-paper-banner-contianer"
			$deviceType={deviceType}
			$backgroundImg={backgroundImg}
		>
			<div id="white-paper-banner-contents-container">
				<div id="white-paper-banner-text-container">
					<span id="white-paper-banner-caption">QAUNT R&D WHITE PAPER</span>
					<h3 id="white-paper-banner-heading">르네상스 퀀트 솔루션 R&D 백서</h3>
					<p id="white-paper-banner-body">
						TEAM 5010의 혁신적인 연구 개발 과정과 르네상스 퀀트 솔루션의 탄생
						스토리를 직접 확인해 보세요.
					</p>
				</div>
				<Button
					accessibleName="white-paper-banner-contianer"
					appearance="neutral"
					hierarchy="secondary"
					stroke="filled"
					shape="rounding"
					text="퀀트 R&D 백서 보기"
					handleClick={handleSeeWhitePaper}
				/>
			</div>
		</WhitePaperBannerContainer>
	)
}
