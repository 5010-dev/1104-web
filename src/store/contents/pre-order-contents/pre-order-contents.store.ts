import { create } from 'zustand'

import { PreOrderContentsState } from './pre-order-contents.types'

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
			event: [
				{
					heading: '사전 오픈런 할인!',
					subheading: ['사전 예약 신청자 중', '100분 선착순 + 50분을 추첨하여'],
					period: { start: '2024.06.20.', end: '2024.07.09.' },
					options: [
						'출시가 10% 할인: 7,500,000원 → 6,750,000원',
						'퀀트 월 구독료 50,000원 → 6개월 동안 면제',
						'개별 트레이딩 어드바이저 제공',
						'개별 맞춤 자산 설계 제공',
					],
				},
				{
					heading: '소개 감사합니다!',
					subheading: ['누구나 오공일공의', '셀러가 될 수 있어요!'],
					period: { start: '2024.06.20.', end: '2024.07.09.' },
					options: [
						'르네상스 소개 및 구매 전환 시 인당 10% 커미션 -> 인당 675,000원 지급',
					],
					caption: [
						'구매자에 한해서만 셀러로 활동 가능합니다.',
						'10% 커미션 요율은 사전 예약 이벤트 기간에만 적용됩니다.',
						'사전 예약 이벤트 종료 후에는 공식 요율대로 운영됩니다.',
						'사전 예약 이벤트 종료 후에도 누구나 셀러로 활동할 수 있습니다.',
						'이벤트 참여 안내는 사전 예약 완료 시 이메일로 안내 드릴 예정입니다.',
					],
				},
			],
		},
		detailsData: {
			heading: '퀀트 솔루션이 궁금하시다면,',
			body: '출시 전에 미리 살펴볼 수 있어요.',
		},
	}),
)
