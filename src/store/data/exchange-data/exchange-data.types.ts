import { exchangeList } from './exchange-data.store'

export type Exchange = {
	name: string
	koName: string
	referralCode: string
	url: string
}

export type ExchangeName = (typeof exchangeList)[number]['name']

export interface ExchangeDataState {
	defaultExchange: Exchange['name']
	exchangeList: Exchange[]
}
