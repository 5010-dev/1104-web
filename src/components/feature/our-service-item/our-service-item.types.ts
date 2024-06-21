import { MouseEvent } from 'react'

export type OurServiceItemProps = {
	imageUrl: string
	heading: string
	subheading: string
	features: string[]
	body: string[]
	freeTrial: boolean
	handleSeeDetails: (e: MouseEvent<HTMLButtonElement>) => void
	handleFreeTrial?: (e: MouseEvent<HTMLButtonElement>) => void
}

export type OurServiceItemContainerProps = {
	$imageUrl: string
}
