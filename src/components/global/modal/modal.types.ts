import { ReactNode, MouseEvent } from 'react'
import { DeviceType } from '../../../store/deviceTypeStore'

export type ModalProps = {
	children: ReactNode | null
	title?: string
	bottomButtonText?: string
	backgroundPanel?: boolean
	handleClose: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
	handleBottomButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

export type ModalContainerProps = {
	$deviceType: DeviceType
	$backgroundPanel?: boolean
}
