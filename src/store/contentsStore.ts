import { create } from 'zustand'

import backgroundImage from '../assets/img/home-about-image.webp'
import mockupImage from '../assets/img/home-mockup-image.webp'
import serviceImage1 from '../assets/img/service-image-1.webp'
import serviceImage2 from '../assets/img/service-image-2.webp'
import serviceImage3 from '../assets/img/service-image-3.webp'
import resultImage1 from '../assets/img/result-persona-image-1.webp'
import resultImage2 from '../assets/img/result-persona-image-2.webp'
import resultImage3 from '../assets/img/result-persona-image-3.webp'
import resultImage4 from '../assets/img/result-persona-image-4.webp'

export type AchievementItem = {
	caption: string
	heading: string
	body: string
	linkUrl: string
}

export type ResultItem = {
	voice: string
	name: string
	imgUrl: string
	period: string
	result: string
	note: string
	comment: string
	linkUrl: string
}

export interface ContentsState {
	home: {
		image: {
			backgroundImage: string
			mockupImage: string
		}
		text: {
			display: string
			subheading: string
			ctaButtonText: string
			linkText: string
		}
	}
	about: {
		text: {
			heading: string
			body: string
			caption: string
		}
		items: { subheading: string; heading: string }[]
	}
	service: {
		items: {
			imgUrl: string
			caption: string
			heading: string
			body: string
			buttonText: string
		}[]
	}
	achievement: {
		heading: string
		items: AchievementItem[]
	}
	result: {
		heading: string
		items: ResultItem[]
	}
	footer: {
		simpleDisclaimer: string[]
	}
}

export const useContentsStore = create<ContentsState>((set) => ({
	home: {
		image: {
			backgroundImage: backgroundImage,
			mockupImage: mockupImage,
		},
		text: {
			display: 'Elevate your investing journey',
			subheading:
				'금융 전문가와 수학자들이 설계한 최첨단 기술을 통해 여러분의 거래 경험을 향상해 보세요.',
			ctaButtonText: '5010 매매전략 무료 전자책 받기 →',
			linkText: '1:1 무료 상담받고 할인코드 받아가세요!',
		},
	},
	footer: {
		simpleDisclaimer: [
			'거래에는 위험이 따르며, 대부분의 데이트레이더와 공식 및 차트 기반 투자 전략을 사용하는 투자자들은 손실을 봅니다. 이 사이트와 1104 R&I가 제공하는 제품 및 서비스는 정보 제공과 교육 목적으로만 제공됩니다. 모든 콘텐츠는 당사의 서비스를 시연하기 위해 사후에 선택된 가상의 내용으로 간주해야 하며, 금융 조언으로 해석해서는 안 됩니다. 증권, 상품 및 기타 투자를 매수, 매도, 보유 또는 거래하는 결정에는 위험이 수반되며, 자격을 갖춘 금융 전문가의 조언에 따라 내리는 것이 가장 좋습니다. 과거의 성과가 미래의 결과를 보장하지는 않습니다.',
			'가상 또는 시뮬레이션된 성과 결과에는 특정 제한 사항이 있습니다. 실제 성과 기록과 달리, 시뮬레이션된 결과는 실제 거래를 나타내지 않습니다. 또한, 거래가 실행되지 않았기 때문에 결과는 유동성 부족과 같은 특정 시장 요인의 영향을 과소 또는 과대 평가했을 수 있습니다. 일반적으로 시뮬레이션된 거래 프로그램은 사후 판단의 이점을 통해 설계되며, 과거 정보를 기반으로 합니다. 어떠한 계정도 표시된 것과 유사한 이익 또는 손실을 달성할 가능성이 있다는 것을 보장하지 않습니다.',
			'이 웹사이트에 나타나는 고객 후기는 다른 고객을 대표하지 않을 수 있으며, 향후 성과나 성공을 보장하지 않습니다.',
			'차트 플랫폼을 위한 기술 분석 도구 제공업체로서 당사는 고객의 개인 거래 계좌나 중개 계좌에 접근할 수 없습니다. 따라서 당사가 제공하는 콘텐츠나 도구를 기반으로 고객이 전체 트레이더보다 더 나은 성과를 거둔다고 믿을 이유가 없습니다.',
			'이 사이트에 사용된 차트는 대부분의 도구가 구축된 TradingView에서 제공합니다. TradingView®는 TradingView, Inc.의 등록 상표입니다. (www.TradingView.com) TradingView®는 여기에 설명된 서비스의 소유자, 개발자 또는 제공자와 제휴하지 않습니다.',
			'이것은 당사의 전체 면책 조항을 나타내지 않으므로, 전체 면책 조항을 꼭 읽어 보시기 바랍니다.',
		],
	},
	about: {
		text: {
			heading:
				'우리는 모든 투자자들이 사용할 수 있는 전략적 투자 시스템을 만들고 있어요.',
			body: '1104 R&I는 교육과 IT 기술을 접목, 각 분야의 전문가들과 함께 투자 시장의 모든 것을 총망라한 5010 매매 전략을 개발하고 보급했어요. 나아가 1104 R&I는 최신 기술과 응용 수학을 통해 획기적인 계량적 투자 시스템을 만들고자 노력하고 있어요.',
			caption: '2023. 3. ~ 현재까지',
		},
		items: [
			{
				subheading: '5010 매매 전략을 경험한 투자자 수',
				heading: '1,274+',
			},
			{
				subheading: '5010 매매 전략의 R&D 기간',
				heading: '4년+',
			},
			{
				subheading: '5010 매매 전략 누적 연구 투자액',
				heading: '5억 원+',
			},
		],
	},
	service: {
		items: [
			{
				imgUrl: serviceImage1,
				caption: '5010 매매 전략',
				heading: '절대 지지 않는 방법이 계속해서 이기는 방법이다.',
				body: '쉽고 명확하고 과학적인 방법으로. 5010 매매 전략은 투자 시장의 모든 것을 총망라한, 단순 기법이 아닌 전략으로서의 투자 교육입니다.',
				buttonText: '5010 매매 전략 자세히 보기 →',
			},
			{
				imgUrl: serviceImage2,
				caption: '5010 인디케이터',
				heading: '가격 형성 원리에 입각한 매매 보조 지표',
				body: '5010 매매 전략을 보조하기 위해 개발되었습니다. 가장 단순하고 명확하게, 기계적인 매매가 가능하도록, 그래서 누구나 사용할 수 있도록 만들었습니다.',
				buttonText: '5010 인디케이터 자세히 보기 →',
			},
			{
				imgUrl: serviceImage3,
				caption: '1104 R&I 공식 커뮤니티',
				heading: '투자는 단거리 경주가 아닌 끝없는 마라톤',
				body: '여러분이 초심을 잃지 않고 나아갈 수 있도록, 잘못된 투자 방식 교정과 동기부여 지속 제공을 통해 페이스 페이커가 되어 여러분과 함께 합니다.',
				buttonText: '커뮤니티 참여하기 →',
			},
		],
	},
	achievement: {
		heading: '1104 R&I가 지금까지 달성한 성과들',
		items: [
			{
				caption: '2023 KMONG AWARDS',
				heading: '신인상 수상',
				body: '최고의 전문가를 뽑는 2023년 크몽 어워즈에서 당년 신규 론칭한 서비스 중 우수 성과 TOP10에 선정, 신인상 수상',
				linkUrl: 'https://kmong.com/events/kmong-awards/2023',
			},
			{
				caption: 'KMONG 상위 2% 프리미엄 서비스',
				heading: 'PRIME 달성',
				body: '100만 건의 크몽 거래 분석과 인터뷰, 레퍼런스 체크를 통해 크몽에서 직접 엄선한 상위 2% 전문가 서비스에 선정',
				linkUrl: 'https://kmong.com/gig/475614',
			},
			{
				caption: 'KMONG 전문가 최고 등급',
				heading: 'MASTER 달성',
				body: '2024년 2월 기준, 누적 판매 건수 421건, 고객 만족도 5.0, 주문 성공률 100%, 크몽 전문가 최고 등급 달성 및 유지',
				linkUrl: 'https://kmong.com/gig/455172',
			},
			{
				caption: 'WADIZ 펀딩',
				heading: '4억+ 달성',
				body: '1,106명 펀딩 참여하여 2024. 02. 21. 펀딩 성공적으로 종료, 2024년 4월 기준 고객 만족도 5.0 (46개 리뷰) 달성',
				linkUrl: 'https://www.wadiz.kr/web/campaign/detail/224157',
			},
		],
	},
	result: {
		heading: '1104 R&I를 만나고 달라진 투자자들',
		items: [
			{
				voice:
					'그 흔한 주식과 코인 투자 경험도 없고 차트조차 본 적 없는데 가능할까?',
				name: 'Jaden',
				imgUrl: resultImage1,
				period: '2023. 04. 25. ~ 07. 12. 기준 (3달)',
				result: '수익률 600%',
				note: '이후 5010팀 스카웃',
				comment:
					'차트를 본적도 없던 수강생조차 단지 노력만으로 값진 성과를 만들어 냈습니다.',
				linkUrl: '',
			},
			{
				voice:
					'내 나이 45, 아이들 수저를 금으로 만들어주고 싶은데 너무 늦진 않았을까?',
				name: '아쿠마',
				imgUrl: resultImage2,
				period: '2023. 06. 12. ~ 07. 14. 기준 (1달)',
				result: '수익률 200%',
				note: '승률 90% 이상 유지',
				comment:
					'45세의 나이, 그리고 처음 접하는 재테크. 꾸준한 연습만으로 결국 해내셨습니다.',
				linkUrl: '',
			},
			{
				voice:
					'다년간 트레이딩을 했는데도 시드가 늘지 않아, 분명 이유가 있겠지?',
				name: '최태민',
				imgUrl: resultImage3,
				period: '2023. 06. 14. ~ 06. 22. 기준 (1주)',
				result: '수익률 200%',
				note: '1주간 $15,000 수익',
				comment:
					'기본기가 탄탄한 수강생이 1104 R&I를 만나면 그 시너지는 더욱 극대화될 수 있습니다.',
				linkUrl: '',
			},
			{
				voice:
					'정말 안해본 공부가 없고 안써본 보조 지표가 없는데, 뭐가 문제지?',
				name: '얼마나좋아',
				imgUrl: resultImage4,
				period: '2023. 04. 06. ~ 07. 22. 기준 (3달)',
				result: '수익률 1,000%',
				note: '3달간 $100,000 수익',
				comment:
					'경력자일수록 단순 명확한 5010 매매 전략의 진가를 알아보고 계십니다.',
				linkUrl: '',
			},
		],
	},
}))
