import { create } from 'zustand'

import { ExchangeDataState, Exchange } from './exchange-data.types'

export const exchangeList: Exchange[] = [
	{ name: 'binance', koName: '바이낸스', referralCode: '', url: '' },
	{
		name: 'bybit',
		koName: '바이비트',
		referralCode: '63326',
		url: 'https://www.bybit.com/en/sign-up?affiliate_id=63326&group_id=0&group_type=1',
	},
	{ name: 'bitget', koName: '비트겟', referralCode: '', url: '' },
	{ name: 'okx', koName: 'OKX', referralCode: '', url: '' },
	{ name: 'others', koName: '그 외 다른 거래소', referralCode: '', url: '' },
]

export const useExchangeDataStore = create<ExchangeDataState>((set) => ({
	defaultExchange: 'bybit',
	exchangeList: exchangeList,
}))
