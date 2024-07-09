import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAboutUsContentsStore } from '../../../store/contents/about-us-contents/about-us-contents.store'
import usePointerCoarseAndSafari from '../../../hooks/use-pointer-coarse-and-safari'

import { AboutUsIntroductionContainer } from './about-us-introduction.styles'

import Card from '../../global/card/card.component'
import FormattedNumbering from './formatted-numbering/formatted-numbering.component'

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
					<div id="about-us-introduction-caption-container">
						<FontAwesomeIcon
							icon={faRocket}
							id="about-us-introduction-caption-icon"
						/>
						<span id="about-us-introduction-caption">BEYOND THE LIMITS</span>
					</div>
					<h3 id="about-us-introduction-heading">{heading}</h3>
				</Card>
				<div id="aobut-us-introduction-paragraph-container">
					{paragraph.map((item, index) => (
						<div className="about-us-introduction-paragraph" key={index}>
							<FormattedNumbering num={index} />
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
