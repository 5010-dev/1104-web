export interface FreeTrialContentState {
	image: {
		mockupImage: string
		backgroundImage: string
	}
	heading: string[]
	subheading: string
	overview: {
		caption: string
		features: {
			body: string
			subtitle: string
			caption: string
			button: boolean
			form: boolean
		}[]
		summary: string[]
	}
}
