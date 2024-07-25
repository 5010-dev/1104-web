import { create } from 'zustand'

import { ExchangePromotionDataState } from './exchange-promotion-data.types'

export const useExchangePromotionDataStore = create<ExchangePromotionDataState>(
	(set) => ({
		mainPromotion: {
			benefit: '최대 수수료 할인률 20% 제공',
			description: '거래소 정책 기준',
		},
		subPromotion: [
			{
				benefit: 'TEAM 5010 커뮤니티 대회',
				description: '대회 수상자 상금 지급',
			},
			{
				benefit: '사용료 월 228,000원 → 110,000원',
				description: '인디케이터 가격 할인',
			},
		],
	}),
)
