import { create } from 'zustand'

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
		event: {
			heading: string
			options: string[]
		}
	}
}

export const usePreOrderContentsStore = create<PreOrderContentsState>(
	(set) => ({
		launchingDate: new Date('2024-07-10T00:00:00Z'),
		title: {
			heading: 'QUANT SOLUTION',
			subheading: '1104 R&I 퀀트 솔루션 | 2024. 07. 10. 출시',
		},
		formData: {
			caption: '사전예약 진행중',
			heading: '르네상스 퀀트 솔루션',
			subheading: 'Devloped & Provided by 1104 R&I',
			body: [
				'1104 R&I가 새롭게 선보이는 르네상스 퀀트 솔루션은 리스크 관리에 초점을 맞춘 개량적 투자 전략과 자동 매매 시스템을 제공합니다.',
				'저위험 및 스윙 전략을 통해 안정적인 복리 수익을 달성하고, 장기적인 관점에서의 투자를 지향합니다.',
			],
			event: {
				heading: '사전 예약 신청자 중 30분을 추첨하여,',
				options: [
					'출시가 10% 할인: 7,500,000원 → 6,750,000원',
					'퀀트 월 구독료 50,000원 → 6개월 동안 면제',
					'개별 트레딩 어드바이저 제공 (12개월 질의)',
					'개별 맞춤 자산 설계 제공',
				],
			},
		},
	}),
)
