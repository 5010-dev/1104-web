import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

import { ServiceItemDetailsProps } from './service-item-details.types'
import { ServiceItemDetailsContainer } from './service-item-details.styles'

import ServiceItemDetailsImg from './service-item-details-img/service-item-details-img.component'

export default function ServiceItemDetails(props: ServiceItemDetailsProps) {
	const { detailsImgUrls } = props

	return (
		<ServiceItemDetailsContainer>
			<div id="service-details-heading-container">
				<h3 id="service-details-heading">서비스 상세보기</h3>
				<FontAwesomeIcon icon={faAnglesDown} id="down-icon" />
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
