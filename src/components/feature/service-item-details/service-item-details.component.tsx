import { ServiceItemDetailsProps } from './service-item-details.types'
import { ServiceItemDetailsContainer } from './service-item-details.styles'

import ServiceItemDetailsImg from './service-item-details-img/service-item-details-img.component'

export default function ServiceItemDetails(props: ServiceItemDetailsProps) {
	const { detailsImgUrls } = props

	return (
		<ServiceItemDetailsContainer>
			<div id="service-item-details-title-container">
				<hr id="service-item-details-vertical-line" />
				<span id="service-item-details-caption">SERVICE DETAILS</span>
				<h3 id="service-item-details-heading">서비스 상세보기</h3>
			</div>
			<div id="service-details-img-container">
				{detailsImgUrls.map((item, index) => (
					<ServiceItemDetailsImg
						key={index}
						className="service-item-details-img"
						imageUrl={item}
						alt={`service-details-${index}`}
					/>
				))}
			</div>
		</ServiceItemDetailsContainer>
	)
}
