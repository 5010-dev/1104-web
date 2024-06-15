import { MouseEvent } from 'react'

export type OurServiceItemProps = {
	imageUrl: string
	heading: string
	subheading: string
	features: string[]
	body: string[]
	handleSeeDetails: (e: MouseEvent<HTMLButtonElement>) => void
}

export type OurServiceItemContainerProps = {
	$imageUrl: string
}
