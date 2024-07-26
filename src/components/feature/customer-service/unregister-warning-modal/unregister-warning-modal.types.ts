import { MouseEvent } from 'react'

export type UnregisterWarningModalProps = {
	handleClose: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
}
