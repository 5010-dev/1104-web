import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { useFreeTrialContentStore } from '../../../../store/contents/freeTrialContentsStore'

import { FreeTrialTitleSectionContainer } from './free-trial-title-section.styles'

import Button from '../../../global/button/button.component'

export default function FreeTrialTitleSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { heading, subheading, image } = useFreeTrialContentStore()

	// HACK: 추후 D2C에서 5010 매매 전략 판매시 변경 필요, 그 전까지는 크몽으로 리디렉션 형태
	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) =>
		window.open('https://kmong.com/gig/455172', '_blank', 'noopener,noreferrer')

	return (
		<FreeTrialTitleSectionContainer $deviceType={deviceType}>
			<img
				id="free-trial-title-section-mockup-img"
				src={image.mockupImage}
				alt="free-trial-mockup"
			/>
			<div id="free-trial-title-section-heading-container">
				{heading.map((item, index) => (
					<h1 key={index} className="free-trial-title-section-heading">
						{item}
					</h1>
				))}
			</div>
			<p id="free-trial-title-section-subheading">{subheading}</p>
			<Button
				accessibleName="free-trial-overview-container"
				appearance="neutral"
				hierarchy="secondary"
				stroke="filled"
				shape="rounding"
				text="서비스 자세히 보기 →"
				type="button"
				handleClick={handleSeeDetails}
			/>
		</FreeTrialTitleSectionContainer>
	)
}
