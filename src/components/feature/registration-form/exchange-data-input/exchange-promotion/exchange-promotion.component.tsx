import Lottie from 'lottie-react'
import shiningAnim from '../../../../../assets/lottie/shining-anim.json'

import { ExchangePromotionProps } from './exchange-promotion.types'
import { ExchangePromotionContainer } from './exchange-promotion.styles'

import Card from '../../../../global/card/card.component'
import Button from '../../../../global/button/button.component'

export default function ExchangePromotion(props: ExchangePromotionProps) {
	const { handleAccept, handleDecline } = props

	return (
		<ExchangePromotionContainer>
			<Lottie
				animationData={shiningAnim}
				loop={true}
				id="lottie-shining-anim"
			/>

			<h1 id="heading">
				<span>잠깐만요!</span>
				<br />
				1104 R&I에서 드리는 혜택이 있어요.
			</h1>
			<div id="rows-container">
				<div className="body-rows">
					<p className="body">
						1104 R&I는 여러 거래소들과 제휴 협력하여 여러분께 아래와 같이 이용
						혜택을 드리고 있어요.
					</p>
					<Card appearance="accent" className="card">
						<p className="subheading">최대 수수료 할인률 20% 제공</p>
						<span className="caption">거래소 정책 기준</span>
					</Card>
				</div>

				<div className="body-rows">
					<p className="body">그 외에 다른 다양한 혜택들도 제공하고 있어요.</p>
					<Card appearance="accent" className="card">
						<p className="subheading">1104 R&I 커뮤니티 대회</p>
						<span className="caption">대회 수상자 상금 지급</span>
					</Card>
					<Card appearance="accent" className="card">
						<p className="subheading">사용료 월 228,000원 → 110,000원</p>
						<span className="caption">인디케이터 가격 할인</span>
					</Card>
				</div>
			</div>
			<div id="buttons-container">
				<Button
					appearance="accent"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					text="좋아요, 혜택 받아볼래요"
					handleClick={handleAccept}
				/>
				<Button
					appearance="neutral"
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					text="괜찮아요, 혜택없이 진행할게요"
					handleClick={handleDecline}
				/>
			</div>
		</ExchangePromotionContainer>
	)
}
