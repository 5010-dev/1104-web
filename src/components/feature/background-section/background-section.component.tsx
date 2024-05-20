import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAboutUsContentsStore } from '../../../store/aboutUsContentsStore'

import { BackgroundSectionContainer } from './background-section.styles'

export default function BackgroundSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const {
		title,
		// firstParagraph,
		// secondParagraph,
		// thirdParagraph,
		// fourthParagraph,
	} = useAboutUsContentsStore((state) => state.backgroundSection)

	return (
		<BackgroundSectionContainer $deviceType={deviceType}>
			<div id="contents-container">
				<div id="title-text-container">
					<div id="title-text">
						<span className="caption">{title.caption}</span>
						<h2 className="heading">{title.heading}</h2>
					</div>
					<p className="body">{title.body}</p>
				</div>
			</div>
		</BackgroundSectionContainer>
	)
}
