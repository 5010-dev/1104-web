import { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { ModalProps } from './modal.types'
import { ModalContainer } from './modal.styles'

import Button from '../button/button.component'

export default function Modal(props: ModalProps) {
	const { children, bottomButtonText, handleClose, handleBottomButtonClick } =
		props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
		document.body.style.overflowY = 'hidden'
	}, [])

	const resetOverflow = () => (document.body.style.overflowY = 'unset')

	return (
		<ModalContainer $deviceType={deviceType}>
			{/* <div id="background-panel" /> */}
			<div id="contents-container">
				<div id="top-bar">
					<Button
						accessibleName="top-bar"
						type="button"
						appearance="neutral"
						hierarchy="secondary"
						stroke="filled"
						shape="rounded3"
						handleClick={(e) => {
							handleClose(e)
							resetOverflow()
						}}
						icon={<FontAwesomeIcon icon={faXmark} />}
						id="close-button"
					/>
				</div>
				<div id="modal-body">{children}</div>
				{bottomButtonText && bottomButtonText.length !== 0 ? (
					<div id="bottom-bar">
						<Button
							accessibleName="bottom-bar"
							type="button"
							appearance="neutral"
							hierarchy="primary"
							stroke="filled"
							shape="rounding"
							text={bottomButtonText}
							id="button"
							handleClick={(e) => {
								handleBottomButtonClick && handleBottomButtonClick(e)
								resetOverflow()
							}}
						/>
					</div>
				) : null}
			</div>
		</ModalContainer>
	)
}
