import { create } from 'zustand'

import mockupImage from '../../../assets/img/free-trial/free-trial-mockup-img.webp'
import backgroundImage from '../../../assets/img/free-trial/free-trial-background-img.webp'

import { FreeTrialContentState } from './free-trial-contetns.types'

export const useFreeTrialContentStore = create<FreeTrialContentState>(() => ({
	image: {
		mockupImage: mockupImage,
		backgroundImage: backgroundImage,
	},
	heading: ['수학과 공학으로', '풀어낸 비트코인 투자'],
	subheading:
		'단순 기법이 아닌 전략으로서의 투자교육으로, 자산 설계와 운용, 그리고 심법까지 모든것을 총망라했습니다.',
	overview: {
		caption: '체험판 구성품',
		features: [
			{ body: '5010 매매 전략 전자책 체험판 (PDF)', caption: '평생 소장' },
			{ body: '5010 인디케이터 (트레이딩뷰 지표)', caption: '3일 무료 이용' },
		],
		summary: ['백문이 불여일견', '직접 살펴보시고 결정하세요!'],
	},
}))
