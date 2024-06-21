import { MouseEvent } from 'react'

export type UserAgreementProps = {
	textLink: {
		descriptionMessage: string
		linkMessage: string
		handleTextLink: (e: MouseEvent<HTMLSpanElement>) => void
	}
	handleButtonClick: (e: MouseEvent<HTMLButtonElement>) => void
}
