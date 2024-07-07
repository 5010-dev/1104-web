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
}

export interface FaqDataState {
	faq: Faq[]
}

type AssetOption = { title: string; value: string }

export interface AssetOptionState {
	assetOptions: AssetOption[]
}
