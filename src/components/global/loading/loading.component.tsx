import { useEffect } from 'react'

import Lottie from 'lottie-react'
import spinnerAnim from '../../../assets/lottie/spinner-anim.json'

import { LoadingContainer } from './loading.styles'

export default function Loading() {
	useEffect(() => {
		const preventScroll = (e: Event) => {
			e.preventDefault()
			e.stopPropagation()
		}

		document.addEventListener('wheel', preventScroll, { passive: false })
		document.addEventListener('touchmove', preventScroll, { passive: false })

		return () => {
			document.removeEventListener('wheel', preventScroll)
			document.removeEventListener('touchmove', preventScroll)
		}
	}, [])

	return (
		<LoadingContainer>
			<div id="background-panel" />
			<Lottie animationData={spinnerAnim} id="loading-anim" />
		</LoadingContainer>
	)
}
