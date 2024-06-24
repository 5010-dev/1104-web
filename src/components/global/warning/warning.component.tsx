import Lottie from 'lottie-react'

import warningAnim from '../../../assets/lottie/warning-anim.json'

import { WarningProps } from './warning.types'
import { WarningContainer } from './warning.styles'

export default function Warning(props: WarningProps) {
	const { text } = props

	return (
		<WarningContainer>
			<Lottie animationData={warningAnim} loop={false} id="lottie-anim" />
			{text ? <h1 id="heading">{text}</h1> : null}
		</WarningContainer>
	)
}
