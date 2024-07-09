type ParternshipHero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
	}
}

type Partnership = {
	heading: string
	body: string
}

export interface PartnershipContentsState {
	hero: ParternshipHero
	partnershipList: Partnership[]
	contact: { heading: string; body: string }
	caption: string
}
