import { MouseEvent } from 'react'

export type NotionPageProps = {
	pageId: string
	handleCloseButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void
	description?: string
	bottomButtonText?: string
	handleBottomButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
