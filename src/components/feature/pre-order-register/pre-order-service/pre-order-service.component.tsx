import { MouseEvent } from 'react'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { usePreOrderContentsStore } from '../../../../store/contents/preOrderContentsStore'
import { useEventReferralStore } from '../../../../store/eventReferralStore'
import useNavigateWithScroll from '../../../../hooks/useNavigateWithScroll'
import useFadeIn from '../../../../hooks/useFadeIn'

import { PreOrderServiceContainer } from './pre-order-service.styles'

import Chip from '../../../global/chip/chip.component'
import Button from '../../../global/button/button.component'

export default function PreOrderService() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { caption, heading, subheading, body } = usePreOrderContentsStore(
		(state) => state.service,
	)
	const { code } = useEventReferralStore()
	const navigate = useNavigateWithScroll()

	const { ref, fadeInVariants, controls } = useFadeIn({
		threshold: 0.25,
	})

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) => {
		if (code.length !== 0) navigate(`/?details&code=${code}`)
		else navigate('/?details')
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
