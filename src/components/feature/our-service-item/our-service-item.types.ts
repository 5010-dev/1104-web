import { MouseEvent } from 'react'

export type OurServiceItemProps = {
	imageUrl: string
	title: string
	description: string
	handleSeeDetails: (e: MouseEvent<HTMLButtonElement>) => void
}

export type OurServiceItemContainerProps = {
	$imageUrl: string
}
