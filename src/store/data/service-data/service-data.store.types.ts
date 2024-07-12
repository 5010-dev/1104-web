import { ProductListItem } from '../../../services/product/product-service.types'

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

export type Faq = {
	heading: string
	body: string
	details?: string[]
	image?: string
}

export type FaqList = {
	list: Faq[]
	disclaimer?: string
}

export interface FaqDataState {
	indicatorFaq: FaqList
	quantFaq: FaqList
}

type AssetOption = { title: string; value: string }

export interface AssetOptionState {
	assetOptions: AssetOption[]
}
