import { create } from 'zustand'

import backgroundImage from '../../assets/img/home-about-image.webp'
import mockupImage from '../../assets/img/home-mockup-image.webp'
import serviceImage1 from '../../assets/img/service-image-1.webp'
import serviceImage2 from '../../assets/img/service-image-2.webp'
import serviceImage3 from '../../assets/img/service-image-3.webp'
import resultImage1 from '../../assets/img/result-persona-image-1.webp'
import resultImage2 from '../../assets/img/result-persona-image-2.webp'
import resultImage3 from '../../assets/img/result-persona-image-3.webp'
import resultImage4 from '../../assets/img/result-persona-image-4.webp'
import communityImage from '../../assets/img/community-image.webp'

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

export type ReviewItem = {
	name: string
	body: string
	platform: 'KMONG' | 'WADIZ'
}

export interface HomeContentsState {
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
	review: {
		items: ReviewItem[]
	}
	community: {
		image: string
		text: {
			caption: string
			heading: string
			body: string
		}
		linkUrl: string
	}
}

export const useHomeContentsStore = create<HomeContentsState>((set) => ({
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
				result: '600%',
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
				result: '200%',
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
				result: '200%',
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
				result: '1,000%',
				note: '3달간 $100,000 수익',
				comment:
					'경력자일수록 단순 명확한 5010 매매 전략의 진가를 알아보고 계십니다.',
				linkUrl: '',
			},
		],
	},
	review: {
		items: [
			{
				name: 'JHQ',
				body: '이 책은 읽자마자 느낌이 오더군요. 아, 되는 방법이다... 욕심만 버리면 월 1억 달성도 꿈이 아니라는 생각이 들었습니다. 게다가 쉽습니다. 단언컨데 이렇게 쉬우면서 실현 가능성 높은 매매법은 없었다고 생각합니다.',
				platform: 'KMONG',
			},
			{
				name: '아*****',
				body: '기초 전자책을 먼저 구매 후에 코칭 서비스의 오픈을 기다렸습니다. 1등으로 구매하고 싶어 회사 회의 중에도 몰래 급히 결제할 만큼 이 서비스를 간절히 기다렸습니다.',
				platform: 'KMONG',
			},
			{
				name: 'rab*****',
				body: '전자책만 구입하였고 다독 및 백테스팅 결과 확신이 생겨 추가 코칭까지 신청하게 되었습니다. 혹시 고민하고 계신다면 바로 코칭으로 오셔도 될 것 같습니다!',
				platform: 'KMONG',
			},
			{
				name: '윤*****',
				body: '우연히 5010 매매 기법 전자책을 먼저 구매하게 되었고, 책 내용이 예상했던 것보다 훨씬 좋아서 코칭편까지 구매하게 되었습니다.',
				platform: 'KMONG',
			},
			{
				name: 'K79*****',
				body: '전자책 구매 후 이거다! 싶은 마음에 서비스 업그레이드를 받아 코칭을 받았습니다.',
				platform: 'KMONG',
			},
			{
				name: '백*****',
				body: '5010 전자책은 처음 열어보는 순간부터, 생각과 기대 이상의 내용으로 스스로에 대한 기준을 잡는데 큰 도움이 됩니다.',
				platform: 'KMONG',
			},
			{
				name: '컬*****',
				body: '일단 전자책만으로도 많은 인사이트를 얻었다고 생각했는데, 오프라인 강의가 찐이었네요.',
				platform: 'KMONG',
			},
			{
				name: '익명의 서포터',
				body: '투자자들에게 과한 욕심을 부추기는 것이 아니라, 고정시드매매와 주기점진매매를 통한 확실한 전략으로 차분히 우리의 계좌를 우상향 하도록 5010 매매법이 설계되어 있어 감사했습니다.',
				platform: 'WADIZ',
			},
			{
				name: '익명의 서포터',
				body: "이번 펀딩은 저에게 투자의 기본적인 생각을 다시 한 번 생각하게 만들어 준 책이었습니다. 이 책을 정독하고 마지막에 든 생각은 딱 하나였습니다. '이 방법이면 나도 해볼 수 있겠는데? 이렇게만 진짜 내가 내 자신을 관리한다면 잘 할 수 있겠는데?' 였습니다.",
				platform: 'WADIZ',
			},
			{
				name: '익명의 서포터',
				body: '그동안 차트 분석하는 많은 책을 읽어봤지만, 이렇게 자산관리에 대한 좋은 내용이 담긴 책은 처음입니다. 약간 퀀트투자 같으면서 비트코인만 가지고 매매를 하고 과학적인 접근 또한 가능하게 설명해 주십니다.',
				platform: 'WADIZ',
			},
			{
				name: '김동희',
				body: "저는 약 5년 간 국내 대기업 증권사 PB 및 투자관련 회사에서 근무한 경험이 있습니다. 'Simple is the Best' 지금까지 더 좋은 보조지표를 찾기 위해, 그리고 더 높은 확률을 찾기 위해 노력했던 것들이 비워지면서 오히려 제 정신을 더 맑게 만들었습니다.",
				platform: 'WADIZ',
			},
		],
	},
	community: {
		image: communityImage,
		text: {
			caption: 'JOIN 1104 R&I TODAY',
			heading: '커뮤니티에 참여하고 최신 정보를 받아보세요.',
			body: '아래 버튼을 클릭하시면 1104 R&I 공식 디스코드 커뮤니티로 이동합니다.',
		},
		linkUrl: '',
	},
}))
