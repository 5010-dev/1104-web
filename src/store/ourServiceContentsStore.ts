import { create } from 'zustand'

import backgroundImage from '../assets/img/home-about-image.webp'

type Hero = {
	image: string
	text: {
		heading: string
		subheading: string
	}
}

export interface OurServiceContentsState {
	hero: Hero
}

export const useOurServiceContentsStore = create<OurServiceContentsState>(
	(set) => ({
		hero: {
			image: backgroundImage,
			text: {
				heading:
					'The Most Advanced Trading Strategies & Technologies In Your Hands',
				subheading: '가장 진보된 거래 전략과 기술들을 당신 손 안에',
			},
		},
	}),
)
