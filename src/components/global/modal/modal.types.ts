import { ReactNode, MouseEvent } from 'react'
import { DeviceType } from '../../../store/deviceTypeStore'

export type ModalProps = {
	id?: string
	className?: string
	children: ReactNode | null
	title?: string
	bottomButtonText?: string
	backgroundPanel?: boolean
	handleClose: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
	handleBottomButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void
	scrollToTop?: boolean
}

export type ModalContainerProps = {
	$deviceType: DeviceType
	$backgroundPanel?: boolean
}
