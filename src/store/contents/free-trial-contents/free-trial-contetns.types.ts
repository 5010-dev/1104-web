export interface FreeTrialContentState {
	image: {
		mockupImage: string
		backgroundImage: string
	}
	heading: string[]
	subheading: string
	overview: {
		caption: string
		features: { body: string; caption: string }[]
		summary: string[]
	}
}
