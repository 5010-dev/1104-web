import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAboutUsContentsStore } from '../../../store/aboutUsContentsStore'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'

import { BackgroundSectionContainer } from './background-section.styles'

export default function BackgroundSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const {
		title,
		firstParagraph,
		secondParagraph,
		// thirdParagraph,
		// fourthParagraph,
	} = useAboutUsContentsStore((state) => state.backgroundSection)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<BackgroundSectionContainer
			$deviceType={deviceType}
			$ParagraphImage={firstParagraph.image}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
		>
			<div id="contents-container">
				<div id="title-text-container">
					<div className="title-text">
						<span className="caption">{title.caption}</span>
						<h2 className="heading">{title.heading}</h2>
					</div>
					<p className="body">{title.body}</p>
				</div>

				<div id="image-text-container">
					<div className="paragraph-text" id="first-paragraph-container">
						<h3 className="subheading">{firstParagraph.heading}</h3>
						<p className="body">{firstParagraph.body}</p>
					</div>
					<div className="paragraph-text" id="second-paragraph-container">
						<h3 className="subheading">{secondParagraph.heading}</h3>
						<p className="body">{secondParagraph.body}</p>
					</div>
					<div id="paragraph-image" />
				</div>
			</div>
		</BackgroundSectionContainer>
	)
}
