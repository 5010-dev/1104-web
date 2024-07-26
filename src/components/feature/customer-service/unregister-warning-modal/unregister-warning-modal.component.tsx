import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { getHelp } from '../../../../utils/customer-service.utils'

import { UnregisterWarningModalProps } from './unregister-warning-modal.types'
import { UnregisterWarningModalContentsContainer } from './unregister-warning-modal.styles'

import Modal from '../../../global/modal/modal.component'
import Button from '../../../global/button/button.component'

export default function UnregisterWarningModal(
	props: UnregisterWarningModalProps,
) {
	const { handleClose } = props

	const handleUnregister = (e: MouseEvent<HTMLButtonElement>) => {
		const subject = '홈페이지 회원 탈퇴 신청'
		getHelp(subject)
	}

	return (
		<Modal handleClose={handleClose} title="회원 탈퇴 신청">
			<UnregisterWarningModalContentsContainer id="unregister-warning-modal-contents-container">
				<div id="unregister-warning-modal-text-container">
					<p id="unregister-warning-modal-body">
						한 번 탈퇴하면 다시 되돌릴 수 없으니 신중히 생각하고 결정해 주세요.
					</p>
				</div>
				<div id="unregister-warning-modal-buttons-container">
					<Button
						id="unregister-confirm-button"
						accessibleName="unregister-warning-modal-buttons-container"
						appearance="system"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						size="md"
						icon={
							<FontAwesomeIcon
								icon={faTrash}
								id="unregister-confirm-button-icon"
							/>
						}
						text="예, 회원을 탈퇴하겠습니다."
						handleClick={handleUnregister}
					/>
				</div>
			</UnregisterWarningModalContentsContainer>
		</Modal>
	)
}
