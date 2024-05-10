import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeAnimation } from '../../../utils/animation.utils'

interface AnimatedWrapperProps {
	children: ReactNode
	animationProps: FadeAnimation
	[key: string]: any
}

export default function AnimatedWrapper({
	children,
	animationProps,
	...props
}: AnimatedWrapperProps) {
	return (
		<AnimatePresence>
			<motion.div
				initial={animationProps.initial}
				animate={animationProps.animate}
				exit={animationProps.exit}
				transition={animationProps.transition}
				style={{ width: '100%', zIndex: 1 }}
				{...props}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	)
}
