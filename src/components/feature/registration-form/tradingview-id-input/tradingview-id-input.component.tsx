import { TradingviewIdInputContainer } from './tradingview-id-input.styles'

import StyledHeading from '../../../global/styled-heading/styled-heading.component'
import Input from '../../../global/input/input.component'
import TextLink from '../../../global/text-link/text-link.component'

export default function TradingviewIdInput() {
	return (
		<TradingviewIdInputContainer>
			<StyledHeading
				heading="트레이딩뷰 ID 입력"
				subheading="인디케이터 셋팅"
			/>
			<Input
				id="tradingview-id-input"
				type="text"
				name="tradingviewId"
				placeholder="트레이딩뷰 ID를 입력해 주세요."
				hierarchy="secondary"
				isValid
			/>
			<TextLink
				id="guide-link"
				description="트레이딩뷰 ID 확인 방법"
				text="가이드 보기"
				appearance="neutral"
				hierarchy="secondary"
				size="sm"
				underlined
				handleClick={() => {}}
			/>
		</TradingviewIdInputContainer>
	)
}
