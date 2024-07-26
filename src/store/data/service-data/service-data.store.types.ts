import {
	ProductListItem,
	Faq,
} from '../../../services/product/product-service.types'

export interface ServiceDataState {
	isServiceListDataLoaded: boolean
	serviceList: ProductListItem[]
	serviceFooter: {
		notes: string[]
		info: string[]
	}
}

export interface ServiceDataAction {
	updateServiceList: (data: ProductListItem[]) => void
	updateIsServiceListDataLoaded: (value: boolean) => void
}

export type FaqList = {
	list: Faq[]
	disclaimer?: string
}

export interface FaqDataState {
	indicatorFaq: FaqList
	quantFaq: FaqList
}

export interface FaqDataAction {
	updateFaqData: (key: keyof FaqDataState, data: Faq[]) => void
	// updateIsFaqDataLoaded: (value: boolean) => void
}

type AssetOption = { title: string; value: string }

export interface AssetOptionState {
	assetOptions: AssetOption[]
}
