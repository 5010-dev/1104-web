import { create } from 'zustand'

import partnershipHeroImage from '../../../assets/img/partnership-hero-image.webp'

import { PartnershipContentsState } from './partnership-contents.types'

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
		contact: {
			heading: 'Contact Us',
			body: '파트너십 관련 문의는 아래 양식을 작성한 뒤, 문의하기 버튼을 클릭해 주세요.',
		},
		caption:
			'제공하신 개인정보(이메일, 성명, 전화번호 등)는 저장되지 않고 바로 폐기되며, 오직 파트너십 관련 소통 용도로만 사용됩니다.',
	}),
)
