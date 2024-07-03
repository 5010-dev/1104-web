import { create } from 'zustand'

import partnershipHeroImage from '../../assets/img/partnership-hero-image.webp'

export type ParternshipHero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
	}
}

export type Partnership = {
	heading: string
	body: string
}

export interface PartnershipContentsState {
	hero: ParternshipHero
	partnershipList: Partnership[]
	contact: string
}

export const usePartnershipContentsStore = create<PartnershipContentsState>(
	() => ({
		hero: {
			image: partnershipHeroImage,
			text: {
				category: 'PARTNERSHIP',
				heading: 'Become Our Valued Partner Today',
				subheading:
					'개인부터 기업까지, 누구나 시작할 수 있는 성공적인 파트너십의 기회',
			},
		},
		partnershipList: [
			{
				heading: '리테일 셀러',
				body: '1104 R&I가 제공하는 서비스를 자유롭게 홍보, 활용하여 더 많은 잠재고객들에게 판매하는 리테일 셀러가 되어보세요. 판매금의 일부를 커미션으로 정산받으실 수 있어요.',
			},
			{
				heading: '기업간 거래 및 업무 협약',
				body: '1104 R&I가 제공하는 서비스에 관심있거나 레버리지하고자 하는 기업들에게, 비즈니스 규모나 업종에 관계없이 다양한 B2B 옵션들과 업무 협약 등을 제공하고 있어요.',
			},
		],
		contact: '관심있는 분들은 언제든지 아래의 양식을 작성하여 문의주세요!',
	}),
)
