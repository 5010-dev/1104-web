import { MouseEvent } from 'react'

import { ServiceTermsList } from '../../../store/serviceTermsStore'

export type TermsModalProps = {
	title?: string
	terms: keyof ServiceTermsList
	handleClose: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
}
