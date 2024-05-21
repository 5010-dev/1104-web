import { create } from 'zustand'

export type Service = {
	name: string
	plan: 'FREE' | 'PREMIUM' | 'ULTIMATE'
	summary: string
	features: string[]
	price?: number
}

export interface ServiceDataState {
	service: Service[]
}

export const useServiceDataStore = create<ServiceDataState>((set) => ({
	service: [
		{
			name: '5010 매매 전략',
			plan: 'FREE',
			summary:
				'5010 매매 전략 전자책 체험판과 5010 인디케이터를 무료로 체험해 보세요.',
			features: [
				'5010 매매 전략 전자책 체험판',
				'5010 인디케이터 무료 체험 7일',
				'체험판 이용 중 구매시 10% 할인 혜택',
			],
		},
		{
			name: '5010 매매 전략',
			plan: 'PREMIUM',
			summary:
				'5010 매매 전략 전자책부터 자산 설계와 인디케이터, 그리고 어드바이저 서포트까지, 5010 매매 전략의 핵심을 경험해 보세요.',
			features: [
				'5010 매매 전략 전자책',
				'5010 인디케이터',
				'5010 시크릿노트',
				'5010 자산 설계',
				'24시간 어드바이저 서포트',
			],
			price: 258000,
		},
		{
			name: '5010 매매 전략',
			plan: 'ULTIMATE',
			summary:
				'프리미엄 플랜의 모든 구성품 포함하여 진입시점 및 기술적 분석 강의 VOD까지, 5010 매매 전략의 모든 것을 누려보세요.',
			features: [
				'5010 매매 전략 전자책',
				'5010 인디케이터',
				'5010 시크릿노트',
				'5010 자산 설계',
				'24시간 어드바이저 서포트',
				'진입시점 강의 VOD + 강의자료',
				'기술적 분석 강의 VOD + 강의자료',
			],
			price: 928000,
		},
	],
}))
