type Service = {
	caption: string
	heading: string
	subheading: string
	body: string[]
}

type Notification = {
	imageUrl: string
	quote: string[]
	body: string
}

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

type FormData = {
	subheading: string[]
	heading: string
	mockupImg: string
	body: string[]
	terms: string
	agreement: string
	event: Event[]
}

export interface PreOrderContentsState {
	launchingDate: Date
	title: {
		heading: string
		subheading: string
		eventName: string
		affiliate: string
		eventPeriod: string
	}
	service: Service
	notification: Notification
	formData: FormData
}
