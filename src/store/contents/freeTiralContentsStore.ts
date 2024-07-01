import { create } from 'zustand'

import mockupImage from '../../assets/img/free-trial/free-trial-mockup-img.webp'
import backgroundImage from '../../assets/img/free-trial/free-trial-background-img.webp'

export interface FreeTrialContentState {
	image: {
		mockupImage: string
		backgroundImage: string
	}
	heading: string[]
	subheading: string
	overview: {
		features: string[]
		summary: string[]
	}
	audience: {
		features: string[]
		summary: string
	}
	indicator: {
		caption: string
		heading: string
		subheading: string
	}

	ctaButton: {
		caption: string
		text: string
	}
}

export const useFreeTrialContentStore = create<FreeTrialContentState>(() => ({
	image: {
		mockupImage: mockupImage,
		backgroundImage: backgroundImage,
	},
	heading: ['수학과 공학으로', '풀어낸 비트코인 투자'],
	subheading:
		'단순 기법이 아닌 전략으로서의 투자교육으로, 자산 설계와 운용, 그리고 심법까지 모든것을 총망라했습니다.',
	overview: {
		features: [
			'하루 1시간 내외 투자를 통해',
			'100 ~ 500 만 원의 부담없는 초기 자금으로',
			'2년 내에 월 1억 고정 수입 달성을 목표로 하는',
		],
		summary: ['가장 현실적인', '재태크 방법론'],
	},
	audience: {
		features: [
			'투자가 처음이신 분',
			'투자 손실 경험이 있으신 분',
			'투자를 제대로 배워보실 분',
		],
		summary: '누구나 바로 실전에 뛰어들 수 있도록!',
	},
	indicator: {
		caption: 'ONE MORE SPECIAL THING,',
		heading: '5010 인디케이터',
		subheading:
			'5010 매매 전략을 보조하기 위해 3년간 3억 원을 투자해 연구/개발한 5010 매매 전략 전용 지표도 3일간 체험판으로 사용해 보실 수 있습니다.',
	},
	ctaButton: {
		caption: '백문이 불여일견, 직접 살펴보시고 결정하세요!',
		text: '5010 매매 전략 상세보기 →',
	},
}))
