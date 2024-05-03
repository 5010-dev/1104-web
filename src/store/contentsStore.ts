import { create } from 'zustand'

import backgroundImage from '../assets/img/home-about-image.jpeg'
import mockupImage from '../assets/img/home-mockup-image.png'

export interface ContentsState {
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
}

export const useContentsStore = create<ContentsState>((set) => ({
	home: {
		image: {
			backgroundImage: backgroundImage,
			mockupImage: mockupImage,
		},
		text: {
			display: 'Elevate your investing journey',
			subheading:
				'금융 전문가와 수학자들이 설계한 최첨단 기술을 통해 여러분의 거래 경험을 향상해 보세요.',
			ctaButtonText: '5010 매매전략 무료 전자책 받기 →',
			linkText: '1:1 무료 상담받고 할인코드 받아가세요!',
		},
	},
}))
