export type AchievementItem = {
	caption: string
	heading: string
	body: string
	linkUrl: string
}

export type ResultItem = {
	voice: string
	name: string
	imgUrl: string
	period: string
	result: string
	note: string
	comment: string
	linkUrl: string
}

export type ReviewItem = {
	name: string
	body: string
	platform: 'KMONG' | 'WADIZ'
}

export interface HomeContentsState {
	home: {
		image: {
			backgroundImage: string
			mockupImage: string
		}
		text: {
			display: string
			subheading: string
			ctaButtonText: string
			linkText: string
		}
	}
	about: {
		text: {
			heading: string
			body: string
			caption: string
		}
		items: { subheading: string; heading: string }[]
	}
	service: {
		items: {
			imgUrl: string
			id: number | null
			caption: string
			heading: string
			body: string
			buttonText: string
		}[]
	}
	achievement: {
		heading: string
		items: AchievementItem[]
	}
	result: {
		heading: string
		items: ResultItem[]
	}
	review: {
		items: ReviewItem[]
	}
	community: {
		image: string
		text: {
			caption: string
			heading: string
			body: string
		}
		linkUrl: string
	}
}
