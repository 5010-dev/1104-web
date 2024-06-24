import { MouseEvent } from 'react'
import { Service } from '../../../store/serviceDataStore'

export type TosspaymentsWidgetModalProps = {
	id: number
	item: Service
	handleClose: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
}
