import { create } from 'zustand'

import backgroundImage from '../../assets/img/home-about-image.webp'
import educationImage from '../../assets/img/service-image-1.webp'
import quantImage from '../../assets/img/service-quant-image.webp'

type Hero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
		body: string[]
	}
}

type Service = {
	image: string
	heading: string
	subheading: string
	features: string[]
	body: string[]
}

export interface OurServiceContentsState {
	hero: Hero
	serviceList: Service[]
}

export const useOurServiceContentsStore = create<OurServiceContentsState>(
	(set) => ({
		hero: {
			image: backgroundImage,
			text: {
				category: 'OUR SERVICE',
				heading: 'The Most Advanced Strategies & Technologies In Your Hands',
				subheading: '가장 진보된 거래 전략과 기술들을 당신 손 안에.',
				body: [
					'1104 R&I는 교육과 첨단 기술의 융합을 통해 투자자들에게 명확하고 과학적인 투자 전략과 도구들을 제공합니다. 투자 시장에 첫 발을 내딛는 초보자부터 시장에서 오랜 시간을 보낸 잔뼈가 굵은 베터랑까지, 모든 투자자들이 사용할 수 있는 다양한 수준의 서비스들이 준비되어 있으며, 이를통해 투자자들이 현명한 투자 결정을 내릴 수 있도록 돕습니다.',
					'우리는 투자자 개개인의 성장과 성공을 위해 최선을 다하며, 끊임없는 혁신을 통해 투자의 미래를 열어가는 파트너가 되고자 합니다. 투자자들은 우리의 서비스를 통해 투자와 시장에 대한 이해를 깊이 하고, 기술의 힘을 활용하여 더 나은 투자 결과를 얻을 수 있을 것입니다. 1104 R&I와 함께 투자의 미래를 향한 여정을 시작하고, 새로운 지평을 열어보세요.',
				],
			},
		},
		serviceList: [
			{
				image: educationImage,
				heading: '5010 매매 전략',
				subheading: '쉽고 명확하며 과학적인 투자의 길',
				features: ['전자책', 'VOD', '인디케이터'],
				body: [
					'5010 매매 전략은 투자 시장의 모든 것을 아우르는 종합적인 투자 교육 프로그램입니다. 단순한 기법이 아닌 전략으로서의 접근을 통해, 투자자들은 시장을 보다 깊이 이해하고 체계적으로 대응할 수 있게 됩니다.',
					'1104 R&I의 전문가들이 제공하는 통찰력과 실용적인 가이드는 투자자들이 자신만의 투자 철학을 확립하고 성공적인 투자를 실현하는 데 든든한 토대가 될 것입니다.',
				],
			},
			{
				image: quantImage,
				heading: '퀀트 솔루션',
				subheading: '전통적 투자의 한계를 넘어',
				features: ['인디케이터', '자동 매매', '백테스팅 전략'],
				body: [
					'퀀트 솔루션은 데이터 과학과 인공지능 기술을 활용하여 금융시장의 복잡한 패턴을 분석하고, 최적의 매매 전략을 수립하고 실행하는 자동화 솔루션입니다. 전통적인 투자 방식으로는 포착하기 어려운 시장의 미세한 변화와 기회를 포착하여, 투자자들에게 새로운 차원의 수익 창출 가능성을 제시합니다.',
					'1104 R&I의 퀀트 솔루션은 투자자들이 시장의 불확실성을 극복하고 안정적인 수익을 추구할 수 있도록 돕습니다.',
				],
			},
		],
	}),
)
