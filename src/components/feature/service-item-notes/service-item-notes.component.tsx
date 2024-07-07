import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useServiceDataStore } from '../../../store/data/service-data/service-data.store'

import { ServiceItemNotesContainer } from './service-item-notes.styles'

import Card from '../../global/card/card.component'
import Accordion from '../../global/accordion/accordion.component'
import ServiceTerms from '../service-terms/service-terms.component'

export default function ServiceItemNotes() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { notes, info } = useServiceDataStore((state) => state.serviceFooter)

	return (
		<ServiceItemNotesContainer $deviceType={deviceType}>
			{notes ? (
				<Card
					className="service-item-notes-card"
					appearance="neutral"
					hierarchy="tertiary"
					opacity={1}
				>
					<ul className="service-item-notes-ul">
						{notes.map((item, index) => (
							<li key={index} className="service-item-notes-li">
								{item}
							</li>
						))}
					</ul>
				</Card>
			) : null}
			<Accordion
				heading={
					<h3 className="service-item-accordion-heading">취소 및 환불 규정</h3>
				}
				body={<ServiceTerms terms="refundPolicy" />}
				size="md"
				container
			/>
			<Accordion
				heading={
					<h3 className="service-item-accordion-heading">상품 정보 고시</h3>
				}
				body={
					info ? (
						<ul className="service-item-notes-ul">
							{info.map((item, index) => (
								<li key={index} className="service-item-notes-li">
									{item}
								</li>
							))}
						</ul>
					) : null
				}
				size="md"
				container
			/>
		</ServiceItemNotesContainer>
	)
}
