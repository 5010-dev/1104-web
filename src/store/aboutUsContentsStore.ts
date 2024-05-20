import { create } from 'zustand'

import heroImage from '../assets/img/about-us-hero-image.webp'
import backgroundImage from '../assets/img/background-paragraph-image.webp'

export type Hero = {
	image: string
	text: {
		heading: string
		subheading: string
	}
}

export type ContentsSetcion = {
	caption: string
	heading: string
	firstParagraph: string[]
	quote: string
	secondParagraph: string[]
}

export type BackgroundSection = {
	title: {
		caption: string
		heading: string
		body: string
	}
	firstParagraph: {
		image: string
		heading: string
		body: string
	}
	secondParagraph: {
		heading: string
		body: string
	}
	thirdParagraph: {
		quote: string[]
		body: string
	}
	fourthParagraph: string[]
}

export interface AboutUsContentsState {
	hero: Hero
	backgroundSection: BackgroundSection
	ObjectiveSection: ContentsSetcion
}

export const useAboutUsContentsStore = create<AboutUsContentsState>((set) => ({
	hero: {
		image: heroImage,
		text: {
			heading: 'We Revolutionise Crypto Market & Trading Industry',
			subheading: '우리는 암호화폐 시장과 트레이딩 산업에서 혁신하고 있습니다.',
		},
	},
	backgroundSection: {
		title: {
			caption: 'HERE WE ARE',
			heading:
				"암호화폐(CRYPTO) 시장은 아직까지 회색지대, '음지'에 머물러 있습니다.",
			body: '300명에 달하는 수강생을 교육해오며 맹목적인 투자 권유와 사기 피해 등으로 막대한 손실을 보신 분들을 숱하게 만나왔죠. 아직도 우리 주변 도처에서는 이러한 피해 사례가 여전히 발생하고 있고 어쩌면 그게 바로 여러분의 이야기거나, 가족이나 친구에게 일어난 일일지도 모릅니다.',
		},
		firstParagraph: {
			image: backgroundImage,
			heading: '암호화폐 시장을 향한 부정적인 시선과 색안경',
			body: '이러한 투자자들의 선입견을 깨부수고 좋은 트레이딩 경험을 만들기 위해서는 기존의 통념을 깨부순 새로운 접근 방식과 방법론, 그리고 혁신적인 기술이 필요했습니다.',
		},
		secondParagraph: {
			heading: '믿음에 대한 진심을 담은 보답',
			body: "무엇보다 우리를 믿고 찾아와 주시는 모든 분들에게 우리의 '진심'을 보여드리는데 집중했습니다. 그러다 보니, 우리는 계속해서 성장할 수밖에 없었고 우리와 함께하는 수강생 역시 자연스럽게 성장할 수밖에 없는 '선순환 구조'가 형성될 수 있었습니다.",
		},
		thirdParagraph: {
			quote: ['새 삶을 살아가고 있다.', '꼭 보은하겠다.'],
			body: '우리로 하여금 조금이나마 삶에 여유가 생기는 모습을 보며 1104 R&I 팀은 매일같이 큰 보람을 느끼곤 합니다.',
		},
		fourthParagraph: [
			'그래서 이제는 더 큰 비전과 사명감을 갖고 양지에서 양질의 교육과 서비스를 제공하여 선한 영향력을 행사해 나가겠다 다짐했습니다.',
			'그래서 이제는 우리의 서비스를 보다 더 널리 알리고 우리의 선한 영향력을 보다 널리 퍼뜨려 보기로 하였습니다.',
			'그렇게 우리는 더 큰 꿈을 꾸게 되었습니다.',
		],
	},
	ObjectiveSection: {
		caption: '',
		heading: '',
		firstParagraph: [''],
		quote: '',
		secondParagraph: [''],
	},
}))
