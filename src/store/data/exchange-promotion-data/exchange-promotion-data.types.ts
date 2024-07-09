type ExchangePromotion = {
	benefit: string
	description: string
}

export interface ExchangePromotionDataState {
	mainPromotion: ExchangePromotion
	subPromotion: ExchangePromotion[]
}
