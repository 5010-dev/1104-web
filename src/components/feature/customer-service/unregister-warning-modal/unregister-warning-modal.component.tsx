import { MouseEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ROUTES } from '../../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { useLoadingStore } from '../../../../store/layout/loading.store'
import { useAuthDataStore } from '../../../../store/data/auth-data/auth-data.store'
import { useToastMessageStore } from '../../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../../hooks/use-navigate-with-scroll'

import { logout } from '../../../../services/auth/auth-service'
import { getFormattedDate } from '../../../../utils/date.utils'

import { UnregisterWarningModalProps } from './unregister-warning-modal.types'
import { UnregisterWarningModalContentsContainer } from './unregister-warning-modal.styles'

import Modal from '../../../global/modal/modal.component'
import Button from '../../../global/button/button.component'

export default function UnregisterWarningModal(
	props: UnregisterWarningModalProps,
) {
	const { handleClose } = props
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { resetLoginUser } = useAuthDataStore()
	const { isLoading, updateIsLoading } = useLoadingStore()
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	const handleUnregister = async (e: MouseEvent<HTMLButtonElement>) => {
		try {
			updateIsLoading(true)

			const [datePart, formattedTime] = getFormattedDate(new Date().toString())

			const result = await emailjs.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID!,
				process.env.REACT_APP_EMAILJS_UNREGISTER_TEMPLATE_ID!,
				{
					email: userId,
					date: `${datePart} ${formattedTime}`,
				},
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
			)

			if (result.text === 'OK') {
				navigate(ROUTES.HOME, { replace: true })
				logout()
				resetLoginUser()
				updateToastMessage(
					'회원 탈퇴 신청이 성공적으로 전송되었습니다. 업무일 기준 24시간 이내 처리해 드리겠습니다.',
				)
			}
		} catch (error: any) {
			updateToastMessage(error.message)
		} finally {
			updateIsLoading(false)
		}
	}

	return (
		<>
			{!isLoading ? (
				<Modal handleClose={handleClose} title="회원 탈퇴 신청">
					<UnregisterWarningModalContentsContainer id="unregister-warning-modal-contents-container">
						<div id="unregister-warning-modal-text-container">
							<p id="unregister-warning-modal-body">
								한 번 탈퇴하면 다시 되돌릴 수 없으니 신중히 생각하고 결정해
								주세요.
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
			) : null}
		</>
	)
}
