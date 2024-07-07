import { useDeviceTypeStore } from '../../../../../store/layout/device-type.store'
import { useFreeTrialContentStore } from '../../../../../store/contents/freeTrialContentsStore'

import { FreeTrialOverviewSectionContainer } from './free-trial-overview-section.styles'

import Chip from '../../../../global/chip/chip.component'

export default function FreeTrialOverviewSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { features, summary } = useFreeTrialContentStore(
		(state) => state.overview,
	)

	return (
		<FreeTrialOverviewSectionContainer
			$deviceType={deviceType}
			id="free-trial-overview-container"
		>
			<div id="free-trial-overview-summary-container">
				<span id="free-trial-overview-summary-caption">{summary[0]}</span>
				<h3 id="free-trial-overview-summary">{summary[1]}</h3>
			</div>
			<ul id="free-trial-overview-ul">
				{features.map((item, index) => (
					<li key={index} className="free-trial-overview-li">
						<Chip
							className="free-trial-overview-li-chip"
							appearance="accent"
							hierarchy="primary"
							stroke="filled"
							shape="rounded3"
							size="sm"
							text={item.caption}
							inverted
						/>{' '}
						{item.body}
					</li>
				))}
			</ul>
		</FreeTrialOverviewSectionContainer>
	)
}
