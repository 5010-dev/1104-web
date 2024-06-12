import { create } from 'zustand'

import backgroundImage from '../assets/img/home-about-image.webp'
import educationImage from '../assets/img/service-image-1.webp'
import quantImage from '../assets/img/service-quant-image.webp'

type Hero = {
	image: string
	text: {
		category: string
		heading: string
		subheading: string
	}
}

type Service = {
	image: string
	title: string
	description: string
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
				subheading: '가장 진보된 거래 전략과 기술들을 당신 손 안에',
			},
		},
		serviceList: [
			{
				image: educationImage,
				title: '5010 매매 전략',
				description:
					'쉽고 명확하고 과학적인 방법으로. 5010 매매 전략은 투자 시장의 모든 것을 총망라한, 단순 기법이 아닌 전략으로서의 투자 교육입니다.',
			},
			{
				image: quantImage,
				title: '퀀트 솔루션',
				description:
					'전통적 투자 방식의 한계, 그 너머. 데이터 과학과 AI 기술을 활용하여 금융시장의 복잡한 패턴을 분석하고 매매 전략을 수립/실행하는 자동화 솔루션입니다.',
			},
		],
	}),
)
