import Lottie from 'lottie-react'

import completeAnim from '../../../assets/lottie/complete-anim.json'

import { CompleteProps } from './complete.types'
import { CompleteContainer } from './complete.styles'

export default function Complete(props: CompleteProps) {
	const { text } = props

	return (
		<CompleteContainer>
			<Lottie animationData={completeAnim} loop={false} id="lottie-anim" />
			{text ? <h1 id="heading">{text}</h1> : null}
		</CompleteContainer>
	)
}
