import { create } from 'zustand'

import { OurServiceContentsState } from './our-service-contents.types'

import backgroundImage from '../../../assets/img/home-about-image.webp'
import bannerBackgroundImage from '../../../assets/img/banner-background-img.webp'

export const useOurServiceContentsStore = create<OurServiceContentsState>(
	(set) => ({
		hero: {
			image: backgroundImage,
			text: {
				category: 'OUR SERVICE',
				heading: 'The Most Advanced Strategies & Technologies In Your Hands',
				subheading: '가장 진보된 거래 전략과 기술들을 당신 손 안에.',
				body: [
					'TEAM 5010은 교육과 첨단 기술의 융합을 통해 투자자들에게 명확하고 과학적인 투자 전략과 도구들을 제공합니다. 투자 시장에 첫 발을 내딛는 초보자부터 시장에서 오랜 시간을 보낸 잔뼈가 굵은 베터랑까지, 모든 투자자들이 사용할 수 있는 다양한 수준의 서비스들이 준비되어 있으며, 이를통해 투자자들이 현명한 투자 결정을 내릴 수 있도록 돕습니다.',
					'우리는 투자자 개개인의 성장과 성공을 위해 최선을 다하며, 끊임없는 혁신을 통해 투자의 미래를 열어가는 파트너가 되고자 합니다. 투자자들은 우리의 서비스를 통해 투자와 시장에 대한 이해를 깊이 하고, 기술의 힘을 활용하여 더 나은 투자 결과를 얻을 수 있을 것입니다. TEAM 5010과 함께 투자의 미래를 향한 여정을 시작하고, 새로운 지평을 열어보세요.',
				],
			},
		},
		subscribeService: {
			image: bannerBackgroundImage,
			heading: 'Start Your Investing Journey Today',
			subheading: 'with TEAM 5010',
			body: '금융 전문가와 수학자들이 설계한 최첨단 기술과 함께 새로운 투자 여정을 시작해 보세요.',
		},
	}),
)
