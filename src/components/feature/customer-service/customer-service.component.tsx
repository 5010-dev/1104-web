import { useState, MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { CustomerServiceProps } from './customer-service.types'
import { CustomerServiceContainer } from './customer-service.styles'
import { StyledSectionContainer } from '../../global/styled-section/styled-section.styles'

import TextLink from '../../global/text-link/text-link.component'
import Button from '../../global/button/button.component'
import UnregisterWarningModal from './unregister-warning-modal/unregister-warning-modal.component'

export default function CustomerService(props: CustomerServiceProps) {
	const { handleTextLink } = props
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const handleToggleModal = (
		e: MouseEvent<HTMLButtonElement> | KeyboardEvent,
	) => {
		setIsModalOpen((state) => !state)
	}

	return (
		<>
			{isModalOpen ? (
				<UnregisterWarningModal handleClose={handleToggleModal} />
			) : null}
			<CustomerServiceContainer>
				<StyledSectionContainer
					id="customer-service-card"
					$deviceType={deviceType}
				>
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
				</StyledSectionContainer>
				<Button
					id="unregister-button"
					accessibleName="contents-container"
					appearance="system"
					hierarchy="secondary"
					stroke="filled"
					shape="rounded3"
					size="sm"
					text="회원 탈퇴"
					handleClick={handleToggleModal}
				/>
			</CustomerServiceContainer>
		</>
	)
}
