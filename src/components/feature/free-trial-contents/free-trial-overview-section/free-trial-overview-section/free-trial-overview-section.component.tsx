import { useDeviceTypeStore } from '../../../../../store/deviceTypeStore'
import { useFreeTrialContentStore } from '../../../../../store/contents/freeTiralContentsStore'

import { FreeTrialOverviewSectionContainer } from './free-trial-overview-section.styles'

export default function FreeTrialOverviewSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { features, summary } = useFreeTrialContentStore(
		(state) => state.overview,
	)

	return (
		<FreeTrialOverviewSectionContainer $deviceType={deviceType}>
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
		</FreeTrialOverviewSectionContainer>
	)
}
