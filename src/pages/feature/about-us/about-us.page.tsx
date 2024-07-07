import { useEffect, useState, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useAboutUsContentsStore } from '../../../store/contents/about-us-contents/about-us-contents.store'

import { AboutUsContainer } from './about-us.styles'

import Hero from '../../../components/global/hero/hero.component'
import AboutUsIntroduction from '../../../components/feature/about-us-introduction/about-us-introduction.component'
import Button from '../../../components/global/button/button.component'
import BackgroundSection from '../../../components/feature/about-us-section/background-section/background-section.component'
import ObjectiveSection from '../../../components/feature/about-us-section/objective-section/objective-section.component'

export default function AboutUs() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useAboutUsContentsStore((state) => state.hero)

	const [showLetter, setShowLetter] = useState<boolean>(false)

	const handleShowLetter = (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) =>
		setShowLetter((state) => !state)

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}, [])

	return (
		<AboutUsContainer $deviceType={deviceType}>
			<Hero
				image={image}
				category={text.category}
				heading={text.heading}
				subheading={text.subheading}
			/>
			<AboutUsIntroduction />
			<AnimatePresence>
				<div id="letter-to-investors">
					<div id="show-letter-button-container">
						<span id="show-letter-button-caption">
							1104 R&I와 함께해 주신, 그리고 또 앞으로도 함께해주실
						</span>
						<Button
							id="show-letter-button"
							accessibleName="letter-to-investors"
							appearance="neutral"
							hierarchy="secondary"
							stroke="filled"
							shape="rounding"
							icon={
								<FontAwesomeIcon
									icon={showLetter ? faXmark : faEnvelope}
									id="show-letter-button-icon"
								/>
							}
							text="모든 투자자 분들께 드리는 서한"
							handleClick={handleShowLetter}
						/>
					</div>
					{showLetter ? (
						<motion.div
							id="letter-contents-container"
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
						>
							<BackgroundSection />
							<ObjectiveSection />
							<Button
								id="show-letter-close-button"
								accessibleName="letter-contents-container"
								appearance="neutral"
								hierarchy="secondary"
								stroke="outlined"
								shape="rounding"
								icon={
									<FontAwesomeIcon
										icon={faXmark}
										id="show-letter-close-button-icon"
									/>
								}
								handleClick={handleShowLetter}
							/>
						</motion.div>
					) : null}
				</div>
			</AnimatePresence>
			{showLetter ? null : (
				<div id="horizontal-line-container">
					<hr id="horizontal-line" />
				</div>
			)}
		</AboutUsContainer>
	)
}
