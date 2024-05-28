import Lottie from 'lottie-react'
import usePreventEvent from '../../../hooks/usePreventEvent'

import { AnimationPanelProps } from './animation-panel.types'
import { AnimationPanelContainer } from './animation-panel.styles'

export default function AnimationPanel(props: AnimationPanelProps) {
	const { animationData, preventEvent, animationSize, text } = props

	usePreventEvent(preventEvent)

	return (
		<AnimationPanelContainer $animationSize={animationSize}>
			<div id="background-panel" />
			<Lottie animationData={animationData} id="lottie-anim" />
			{text ? <span id="animation-text">{text}</span> : null}
		</AnimationPanelContainer>
	)
}
