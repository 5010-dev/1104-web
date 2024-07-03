import { create } from 'zustand'

import partnershipHeroImage from '../../assets/img/partnership-hero-image.webp'

export type ParternshipHero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
	}
}

export interface PartnershipContentsState {
	hero: ParternshipHero
}

export const usePartnershipContentsStore = create<PartnershipContentsState>(
	() => ({
		hero: {
			image: partnershipHeroImage,
			text: {
				category: 'PARTNERSHIP',
				heading: 'Become Our Valued Partner Today',
				subheading:
					'개인부터 기업까지, 누구나 시작할 수 있는 성공적인 파트너십의 기회',
			},
		},
	}),
)
