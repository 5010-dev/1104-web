import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { useAboutUsContentsStore } from '../../../../store/contents/about-us-contents/about-us-contents.store'
import usePointerCoarseAndSafari from '../../../../hooks/usePointerCoarseAndSafari'

import { ObjectiveSectionContainer } from './objective-section.styles'

export default function ObjectiveSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { title, display, firstParagraph, secondParagraph } =
		useAboutUsContentsStore((state) => state.objectiveSection)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<ObjectiveSectionContainer
			$deviceType={deviceType}
			$displayImage={display.image}
			$ipoImage={secondParagraph.image}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
		>
			<div className="contents-container">
				<div className="title-text-container">
					<div className="title-text">
						<span className="caption">{title.caption}</span>
						<h2 className="heading">{title.heading}</h2>
					</div>
					<p className="body">{title.body}</p>
				</div>

				<div id="display-text-container">
					{display.text.map((item, index) => (
						<h2 key={index} className="display">
							{item}
						</h2>
					))}
				</div>

				<div id="first-paragraph-container">
					{firstParagraph.map((item, index) => (
						<p key={index} className="body">
							{item}
						</p>
					))}
				</div>

				<div id="vertical-line" />

				<div id="second-paragraph-container">
					{secondParagraph.body.map((item, index) =>
						index < secondParagraph.body.length - 1 ? (
							<p key={index} className="body">
								{item}
							</p>
						) : (
							<div key={index} id="last-heading-container">
								<span>
									.<br />.<br />.<br />
								</span>
								<h2 className="heading">{item}</h2>
							</div>
						),
					)}
					<span id="closing-caption">{secondParagraph.caption}</span>
				</div>
			</div>
		</ObjectiveSectionContainer>
	)
}
