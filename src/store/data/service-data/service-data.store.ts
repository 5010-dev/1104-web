import { create } from 'zustand'

import {
	ServiceDataState,
	ServiceDataAction,
	FaqDataState,
	FaqDataAction,
	AssetOptionState,
} from './service-data.store.types'

const servieNotes: string[] = [
	'전자책 및 VOD 등의 디지털 제품은 영구 소장 가능합니다.',
	'인디케이터는 결제일로부터 31일간, 자동화 서비스는 영구 사용 가능합니다.',
	'결제 후, 서비스 초기 셋팅을 위해 5010.cs.kr@5010.tech 이메일을 통해 주문자 이메일이나 주문자 전화번호로 업무일 기준 24시간 이내 연락을 드립니다.',
	'사용 기간이 정해져 있는 경우, 사용 기간 종료 이후에는 재구매를 통해 서비스를 계속해서 이용할 수 있습니다.',
	'첫 구매 이후 재구매 시에는 담당 어드바이저에게 문의하거나 서비스 센터로 연락주시기 바랍니다.',
]

const serviceInfo: string[] = [
	'제작자 또는 공급자: TEAM 5010',
	'이용조건: 상품 상세 참조',
	'상품 제공 방식: 상품 상세 참조',
	'최소 시스템 사양, 필수 소프트위어: 상품 상세 참조',
	'청약철회 또는 계약해지의 효과: 상품 상세 참조',
	'이용조건: 상품 상세 참조',
	'소비자상담전화: (TEAM 5010 고객센터) 031-894-5019',
]

export const useServiceDataStore = create<ServiceDataState & ServiceDataAction>(
	(set) => ({
		isServiceListDataLoaded: false,
		serviceList: [],
		serviceFooter: {
			notes: servieNotes,
			info: serviceInfo,
		},
		updateServiceList: (data) =>
			set((state) => ({ ...state, serviceList: data })),
		updateIsServiceListDataLoaded: (value) =>
			set((state) => ({ ...state, isServiceListDataLoaded: value })),
	}),
)

export const useFaqDataStore = create<FaqDataState & FaqDataAction>((set) => ({
	indicatorFaq: {
		list: [],
	},
	quantFaq: {
		list: [],
		disclaimer:
			'과거 백테스팅 데이터가 절대적인 지표는 아닙니다. 오히려 백테스팅 데이터가 너무 좋을 경우 과적합 현상을 의심해 봐야 합니다. 이렇듯 과거의 수익이 미래의 수익을 절대적으로 보장하지 않습니다. 예컨대 폭락장이 올 경우 르네상스 퀀트 모델은 리스크를 최소화하기 위해서 자산 분배 비중을 1/100까지 줄입니다. 이에 따라 미래에도 월 수익률을 얼마만큼 보장한다는 것은 오히려 소비자 기만행위이며 과대광고라 생각합니다. 하지만 한 가지 약속드릴 수 있습니다. 5010 팀은 주어진 장 상황에 최고의 성과를 만들기 위해 부단히 노력할 것입니다. 항상 5010 팀을 믿고 선택해 주셔서 다시 한번 감사하단 말씀을 드립니다. 나스닥 상장이란 여정을 가며 계속해서 성장해 나갈 것이며 그 과정에서 나오는 R&D 결과물을 지속적으로 공유드리며, 독자님들과 함께 성장해 나가겠습니다.',
	},
	updateFaqData: (key, data) =>
		set((state) => ({
			...state,
			[key]: { list: data, disclaimer: state[key].disclaimer },
		})),
}))

export const useAssetOptionStore = create<AssetOptionState>((set) => ({
	assetOptions: [
		{ title: '2,000만 원', value: '2000' },
		{ title: '1,000만 원', value: '1000' },
		{ title: '400만 원', value: '400' },
		{ title: '100만 원', value: '100' },
	],
}))
