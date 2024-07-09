import { useEffect } from 'react'

import Lottie from 'lottie-react'
import shiningAnim from '../../../../../assets/lottie/shining-anim.json'

import { useExchangePromotionDataStore } from '../../../../../store/data/exchange-promotion-data/exchange-promotion-data.store'

import { ExchangePromotionProps } from './exchange-promotion.types'
import { ExchangePromotionContainer } from './exchange-promotion.styles'

import Card from '../../../../global/card/card.component'
import Button from '../../../../global/button/button.component'

export default function ExchangePromotion(props: ExchangePromotionProps) {
	const { handleAccept, handleDecline } = props

	const { mainPromotion, subPromotion } = useExchangePromotionDataStore()

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'auto' })
	}, [])

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
						<p className="subheading">{mainPromotion.benefit}</p>
						<span className="caption">{mainPromotion.description}</span>
					</Card>
				</div>

				<div className="body-rows">
					<p className="body">그 외에 다른 다양한 혜택들도 제공하고 있어요.</p>
					{subPromotion.map((item, index) => (
						<Card appearance="accent" className="card" key={index}>
							<p className="subheading">{item.benefit}</p>
							<span className="caption">{item.description}</span>
						</Card>
					))}
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
