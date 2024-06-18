import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { usePreOrderContentsStore } from '../../../store/contents/preOrderContentsStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { PreOrderDetailsContainer } from './pre-order-details.styles'

import Card from '../../global/card/card.component'
import Button from '../../global/button/button.component'

export default function PreOrderDetails() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { heading, body } = usePreOrderContentsStore(
		(state) => state.detailsData,
	)
	const navigate = useNavigateWithScroll()

	const handleSeeDetails = (e: MouseEvent<HTMLButtonElement>) =>
		navigate('/quant')

	return (
		<PreOrderDetailsContainer
			id="quant-pre-order-details-container"
			$deviceType={deviceType}
		>
			<Card
				id="quant-pre-order-details-card"
				hierarchy="tertiary"
				shape="rounded1"
				opacity={0.5}
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
		</PreOrderDetailsContainer>
	)
}
