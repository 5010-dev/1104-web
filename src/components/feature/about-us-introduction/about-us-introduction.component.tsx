import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useAboutUsContentsStore } from '../../../store/contents/aboutUsContentsStore'
import usePointerCoarseAndSafari from '../../../hooks/usePointerCoarseAndSafari'

import { AboutUsIntroductionContainer } from './about-us-introduction.styles'

import Card from '../../global/card/card.component'

export default function AboutUsIntroduction() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const display = useAboutUsContentsStore(
		(state) => state.objectiveSection.display,
	)
	const { heading, paragraph } = useAboutUsContentsStore(
		(state) => state.hero.text.body,
	)
	const isPointerCoarseAndSafari = usePointerCoarseAndSafari()

	return (
		<AboutUsIntroductionContainer
			$deviceType={deviceType}
			$displayImage={display.image}
			$isPointerCoarseAndSafari={isPointerCoarseAndSafari}
		>
			<div className="contents-container">
				<Card hierarchy="secondary" id="about-us-introdcution" shape="rounded1">
					<span id="about-us-introduction-caption">
						<span id="about-us-introduction-caption-span">✨</span>
						<br />
						BEYOND THE LIMITS
					</span>
					<h3 id="about-us-introduction-heading">{heading}</h3>
				</Card>
				<div id="aobut-us-introduction-paragraph-container">
					{paragraph.map((item, index) => (
						<div className="about-us-introduction-paragraph" key={index}>
							<h4 className="about-us-introduction-paragraph-heading">
								{item.heading}
							</h4>
							<p className="about-us-introduction-paragraph-body">
								{item.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</AboutUsIntroductionContainer>
	)
}
