import { MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ROUTES } from '../../../../routes/routes'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { usePreOrderContentsStore } from '../../../../store/contents/pre-order-contents/pre-order-contents.store'
import useNavigateWithScroll from '../../../../hooks/use-navigate-with-scroll'
import useFadeIn from '../../../../hooks/use-fade-in'

import { PreOrderServiceContainer } from './pre-order-service.styles'

import Chip from '../../../global/chip/chip.component'
import Button from '../../../global/button/button.component'

export default function PreOrderService() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { caption, heading, subheading, body } = usePreOrderContentsStore(
		(state) => state.service,
	)
	const navigate = useNavigateWithScroll()

	const { ref, fadeInVariants, controls } = useFadeIn({
		threshold: 0.25,
	})

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(`${ROUTES.HOME}?details`)
	}

	return (
		<PreOrderServiceContainer
			$deviceType={deviceType}
			as={motion.div}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
		>
			<div id="pre-order-service-contents-container">
				<Chip
					id="pre-order-service-chip"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounded3"
					text={caption}
					// inverted
				/>
				<h1 id="pre-order-service-heading">{heading}</h1>
				<span id="pre-order-service-subheading">{subheading}</span>
				{body.map((item, index) => (
					<p key={index} className="pre-order-service-body">
						{item}
					</p>
				))}
				<Button
					id="pre-order-service-button"
					accessibleName="pre-order-service-contents-container"
					appearance="neutral"
					hierarchy="secondary"
					stroke="filled"
					shape="rounding"
					text="서비스 자세히 보기 →"
					handleClick={handleSeeDetails}
				/>
			</div>
		</PreOrderServiceContainer>
	)
}
