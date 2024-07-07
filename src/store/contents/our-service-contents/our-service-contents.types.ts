type Hero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
		body: string[]
	}
}

type SubscribeService = {
	image: string
	heading: string
	subheading: string
	body: string
}

export interface OurServiceContentsState {
	hero: Hero
	subscribeService: SubscribeService
}
