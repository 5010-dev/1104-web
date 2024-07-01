import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useFreeTrialContentStore } from '../../../store/contents/freeTiralContentsStore'

import { FreeTrialTitleSectionContainer } from './free-trial-title-section.styles'

export default function FreeTrialTitleSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { heading, subheading, image } = useFreeTrialContentStore()

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
		</FreeTrialTitleSectionContainer>
	)
}
