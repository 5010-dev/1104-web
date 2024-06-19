import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface UseFadeInOptions {
	duration?: number
	delay?: number
	threshold?: number
}

const useFadeIn = (options?: UseFadeInOptions) => {
	const { duration = 1.5, delay = 0, threshold = 0 } = options || {}

	const controls = useAnimation()
	const [ref, inView] = useInView({ threshold })

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	const fadeInVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration, delay } },
	}

	return { ref, controls, fadeInVariants }
}

export default useFadeIn
