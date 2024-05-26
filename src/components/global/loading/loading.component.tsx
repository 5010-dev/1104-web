import Lottie from 'lottie-react'
import spinnerAnim from '../../../assets/lottie/spinnerAnim.json'

import { LoadingContainer } from './loading.styles'

export default function Loading() {
	return (
		<LoadingContainer>
			<div id="background-panel" />
			<Lottie animationData={spinnerAnim} id="loading-anim" />
		</LoadingContainer>
	)
}
