type Hero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
		body: {
			heading: string
			paragraph: Array<{
				heading: string
				text: string
			}>
		}
	}
}

type BackgroundSection = {
	title: {
		caption: string
		heading: string
		body: string
	}
	firstParagraph: {
		image: string
		heading: string
		body: string
	}
	secondParagraph: {
		heading: string
		body: string
	}
	thirdParagraph: {
		quote: string[]
		body: string
	}
	fourthParagraph: string[]
}

type ObjectiveSection = {
	title: {
		caption: string
		heading: string
		body: string
	}
	display: {
		image: string
		text: string[]
	}
	firstParagraph: string[]
	secondParagraph: {
		image: string
		body: string[]
		caption: string
	}
}

export interface AboutUsContentsState {
	hero: Hero
	backgroundSection: BackgroundSection
	objectiveSection: ObjectiveSection
}
