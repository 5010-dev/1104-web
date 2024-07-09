import { MouseEvent } from 'react'
import { ROUTES } from '../../../../routes/routes'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { usePreOrderContentsStore } from '../../../../store/contents/pre-order-contents/pre-order-contents.store'
import useNavigateWithScroll from '../../../../hooks/useNavigateWithScroll'
import useFadeIn from '../../../../hooks/useFadeIn'

import { PreOrderShowDetailsContainer } from './pre-order-show-details.styles'

import Card from '../../../global/card/card.component'
import Button from '../../../global/button/button.component'

export default function PreOrderShowDetails() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { heading, body } = usePreOrderContentsStore(
		(state) => state.detailsData,
	)
	const navigate = useNavigateWithScroll()

	const { ref, fadeInVariants, controls } = useFadeIn({
		delay: 0.25,
		threshold: 0.1,
	})

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(`${ROUTES.PRE_ORDER}?details`)

	return (
		<PreOrderShowDetailsContainer
			id="quant-pre-order-details-container"
			$deviceType={deviceType}
			as={motion.div}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
		>
			<Card
				id="quant-pre-order-details-card"
				hierarchy="tertiary"
				shape="rounded1"
				opacity={1}
			>
				<div id="quant-pre-order-details-text-container">
					<h1 id="quant-pre-order-details-heading">{heading}</h1>
					<p id="quant-pre-order-details-body">{body}</p>
				</div>
				<Button
					accessibleName="quant-pre-order-details-card"
					type="button"
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					text="서비스 자세히 보기 →"
					handleClick={handleSeeDetails}
				/>
			</Card>
		</PreOrderShowDetailsContainer>
	)
}
