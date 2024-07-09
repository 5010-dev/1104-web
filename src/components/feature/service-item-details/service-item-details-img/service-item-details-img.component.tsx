import { motion } from 'framer-motion'

import useFadeIn from '../../../../hooks/use-fade-in'

import { ServiceItemDetailsImgProps } from './service-item-details-img.types'

export default function ServiceItemDetailsImg(
	props: ServiceItemDetailsImgProps,
) {
	const { className, id, imageUrl, alt } = props

	const { ref, fadeInVariants, controls } = useFadeIn({ duration: 1.5 })

	return (
		<motion.img
			className={className}
			id={id}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
			src={imageUrl}
			alt={alt}
		/>
	)
}
