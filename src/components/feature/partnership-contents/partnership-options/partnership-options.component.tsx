import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { usePartnershipContentsStore } from '../../../../store/contents/partnershipContentsStore'

import { PartnershipOptionsContainer } from './partnership-options.styles'

import Card from '../../../global/card/card.component'

export default function PartnershipOptions() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { partnershipList } = usePartnershipContentsStore()

	return (
		<PartnershipOptionsContainer $deviceType={deviceType}>
			{partnershipList.map((item, index) => (
				<Card
					hierarchy="tertiary"
					opacity={1}
					key={index}
					className="partnership-option-container"
				>
					<h3 className="partnership-option-heading">{item.heading}</h3>
					<p className="partnership-option-body">{item.body}</p>
				</Card>
			))}
		</PartnershipOptionsContainer>
	)
}
