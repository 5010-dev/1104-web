import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { useFreeTrialContentStore } from '../../../../store/contents/freeTiralContentsStore'

import { FreeTrialAudienceSectionContainer } from './free-trial-audience-section.styles'

export default function FreeTrialAudienceSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { features, summary } = useFreeTrialContentStore(
		(state) => state.audience,
	)

	return (
		<FreeTrialAudienceSectionContainer $deviceType={deviceType}>
			<hr className="free-trial-vertical-line" />
			<ul id="free-trial-audience-ul">
				{features.map((item, index) => (
					<li key={index} className="free-trial-audience-li">
						<FontAwesomeIcon
							icon={faCheckCircle}
							className="free-trial-audience-li-icon"
						/>
						{item}
					</li>
				))}
			</ul>
			<h3 id="free-trial-audience-summary">{summary}</h3>
			<hr className="free-trial-vertical-line" />
		</FreeTrialAudienceSectionContainer>
	)
}
