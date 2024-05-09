import { css, keyframes } from 'styled-components'
import { Variants } from 'framer-motion'

export type FadeAnimation = {
	initial: { opacity: number }
	animate: { opacity: number }
	exit: { opacity: number }
	transition: { duration: number }
}

export const fadeAnimation: FadeAnimation = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 },
	transition: { duration: 1 },
}

export const rotateAnimationVariants: Variants = {
	rotated: { rotate: 45 },
	default: { rotate: 0 },
}

export const getBlurAnimation = (animationOrder: 'default' | 'reverse') => {
	const inactiveState = css`
		filter: blur(0rem);
		backdrop-filter: blur(0rem);
		-webkit-backdrop-filter: blur(0rem);
	`

	const activeState = css`
		border-radius: 40rem;
		filter: blur(2rem);
		backdrop-filter: blur(2rem);
		-webkit-backdrop-filter: blur(2rem);
	`

	const blurAnimation = keyframes`
  0%{
      ${animationOrder === 'default' ? inactiveState : activeState}
  }
  100%{
    ${animationOrder === 'default' ? activeState : inactiveState}
  }
  `

	return blurAnimation
}
