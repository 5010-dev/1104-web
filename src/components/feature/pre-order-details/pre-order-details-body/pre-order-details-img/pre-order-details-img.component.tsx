import { motion } from 'framer-motion'

import useFadeIn from '../../../../../hooks/use-fade-in'

import { PreOrderDetailsImgProps } from './pre-order-details-img.types'

export default function PreOrderDetailsImg(props: PreOrderDetailsImgProps) {
	const { imageUrl, alt } = props

	const { ref, fadeInVariants, controls } = useFadeIn({ duration: 1.5 })

	return (
		<motion.img
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
			src={imageUrl}
			alt={alt}
			className="quant-details-img"
		/>
	)
}
