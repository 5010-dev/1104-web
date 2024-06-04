import { ReactNode, MouseEvent } from 'react'
import { DeviceType } from '../../../store/deviceTypeStore'

export type ModalProps = {
	children: ReactNode | null
	bottomButtonText?: string
	handleClose: (e: MouseEvent<HTMLButtonElement>) => void
	handleBottomButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export type ModalContainerProps = {
	$deviceType: DeviceType
}
