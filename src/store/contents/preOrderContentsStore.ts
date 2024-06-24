import { create } from 'zustand'

import backgroundImg from '../../assets/img/banner-background-img.webp'

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
	heading: string
	body: string
	terms: string
	agreement: string
	event: Event[]
}

export interface PreOrderContentsState {
	launchingDate: Date
	title: {
		heading: string
		subheading: string
	}
	service: Service
	notification: Notification
	formData: FormData
}

export const usePreOrderContentsStore = create<PreOrderContentsState>(
	(set) => ({
		launchingDate: new Date('2024-07-10T00:00:00Z'),
		title: {
			heading: 'QUANT SOLUTION',
			subheading: '1104 R&I 퀀트 솔루션 | 2024. 07. 10. 출시',
		},
		service: {
			caption: '사전예약 진행중',
			heading: '르네상스 퀀트 솔루션',
			subheading: 'Devloped & Provided by 1104 R&I',
			body: [
				'1104 R&I가 새롭게 선보이는 르네상스 퀀트 솔루션은 리스크 관리에 초점을 맞춘 개량적 투자 전략과 자동 매매 시스템을 제공합니다.',
				'저위험 및 스윙 전략을 통해 안정적인 복리 수익을 달성하고, 장기적인 관점에서의 투자를 지향합니다.',
			],
		},
		notification: {
			imageUrl: backgroundImg,
			quote: [
				'어떤 로직으로 구동되나요?',
				'월 50% 이상 수익 가능한 전략은 없나요?',
			],
			body: '여러분들의 궁금증에 답하고자, 아래의 글을 작성했습니다. 반드시 읽어주시기 바랍니다!',
		},
		formData: {
			heading: '사전예약 이벤트',
			body: '지금 바로 사전예약하고 다양하고 풍성한 이벤트들에 참여해 보세요!',
			terms: '개인정보 제공 동의: 1104 R&I 이벤트',
			agreement:
				'사전 예약 내용을 확인하였으며, 이벤트 참여를 위해 정보 제공 등에 동의합니다.',
			event: [
				{
					heading: '퀀트 모델 추가 증정!',
					subheading: ['사전 예약 신청자 전원'],
					period: { start: '2024.06.20.', end: '2024.07.09.' },
					options: ['출시가 7,500,000원의 모델 추가 증정'],
					caption: [
						'총 1,500만 원 상당의 퀀트 모델을 절반 가격으로 구매할 수 있는 기회!',
						'자세한 내용은 상단의 공지 사항을 꼭 확인해 주세요.',
					],
				},
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
	}),
)
