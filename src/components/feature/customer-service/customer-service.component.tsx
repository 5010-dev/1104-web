import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { CustomerServiceProps } from './customer-service.types'
import { CustomerServiceContainer } from './customer-service.styles'

import TextLink from '../../global/text-link/text-link.component'

export default function CustomerService(props: CustomerServiceProps) {
	const { handleTextLink } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CustomerServiceContainer $deviceType={deviceType}>
			<FontAwesomeIcon icon={faCircleQuestion} id="customer-service-icon" />
			<div id="customer-text-container">
				<span>문의 사항이 있으시거나 문제를 겪고 계신가요?</span>
				<TextLink
					text="고객지원 센터에 문의하기"
					appearance="neutral"
					hierarchy="secondary"
					size="md"
					underlined
					handleClick={handleTextLink}
				/>
			</div>
		</CustomerServiceContainer>
	)
}
