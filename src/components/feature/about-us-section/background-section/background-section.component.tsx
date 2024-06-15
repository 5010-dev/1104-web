import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { useAboutUsContentsStore } from '../../../../store/contents/aboutUsContentsStore'
import usePointerCoarseAndSafari from '../../../../hooks/usePointerCoarseAndSafari'

import { BackgroundSectionContainer } from './background-section.styles'

export default function BackgroundSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const {
		title,
		firstParagraph,
		secondParagraph,
		thirdParagraph,
		fourthParagraph,
	} = useAboutUsContentsStore((state) => state.backgroundSection)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<BackgroundSectionContainer
			$deviceType={deviceType}
			$paragraphImage={firstParagraph.image}
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

				<div id="third-paragraph-container">
					<div id="vertical-line" />
					<div id="quote-text-container">
						{thirdParagraph.quote.map((item, index) => (
							<span key={index} className="quote">
								"{item}"
							</span>
						))}
					</div>
					<p className="body">{thirdParagraph.body}</p>
				</div>

				<div id="fourth-paragraph-container">
					{fourthParagraph.map((item, index) =>
						index < fourthParagraph.length - 1 ? (
							<p key={index} className="subheading">
								{item}
							</p>
						) : (
							<div key={index} id="last-heading-container">
								<span>
									.<br />.<br />.<br />
								</span>
								<h2 className="heading" id="fourth-paragraph-subheading">
									{item}
								</h2>
							</div>
						),
					)}
				</div>
			</div>
		</BackgroundSectionContainer>
	)
}
