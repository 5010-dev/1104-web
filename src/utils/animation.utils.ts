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
	transition: { duration: 0.75 },
}

export const rotateAnimationVariants: Variants = {
	rotated: { rotate: 45 },
	default: { rotate: 0 },
}
