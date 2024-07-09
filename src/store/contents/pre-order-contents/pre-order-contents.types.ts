type Event = {
	heading: string
	subheading: string[]
	period: {
		start: string
		end: string
	}
	options: string[]
	caption?: string[]
}

export interface PreOrderContentsState {
	launchingDate: Date
	title: {
		heading: string
		subheading: string
	}
	formData: {
		caption: string
		heading: string
		subheading: string
		body: string[]
		event: Event[]
	}
	detailsData: {
		heading: string
		body: string
	}
}
