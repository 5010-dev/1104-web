import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../../../store/deviceTypeStore'
import { useFreeTrialContentStore } from '../../../../../store/contents/freeTiralContentsStore'

import { FreeTrialOverviewSectionContainer } from './free-trial-overview-section.styles'

import Button from '../../../../global/button/button.component'

export default function FreeTrialOverviewSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { features, summary } = useFreeTrialContentStore(
		(state) => state.overview,
	)

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) =>
		window.open('https://kmong.com/gig/455172', '_blank', 'noopener,noreferrer')

	return (
		<FreeTrialOverviewSectionContainer
			$deviceType={deviceType}
			id="free-trial-overview-container"
		>
			<ul id="free-trial-overview-ul">
				{features.map((item, index) => (
					<li key={index} className="free-trial-overview-li">
						{item}
					</li>
				))}
			</ul>
			<div id="free-trial-overview-summary-container">
				<span id="free-trial-overview-summary-caption">{summary[0]}</span>
				<h3 id="free-trial-overview-summary">{summary[1]}</h3>
			</div>
			<Button
				accessibleName="free-trial-overview-container"
				appearance="neutral"
				hierarchy="secondary"
				stroke="filled"
				shape="rounding"
				text="서비스 자세히 보기 →"
				handleClick={handleSeeDetails}
			/>
		</FreeTrialOverviewSectionContainer>
	)
}
