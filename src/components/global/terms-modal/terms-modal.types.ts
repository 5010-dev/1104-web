import { MouseEvent } from 'react'

import { ServiceTermsList } from '../../../store/terms/service-terms.types'

export type TermsModalProps = {
	title?: string
	terms: keyof ServiceTermsList
	handleClose: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
}
