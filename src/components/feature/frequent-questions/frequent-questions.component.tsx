import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { FrequentQuestionsContainer } from './frequent-questions.styles'

import Accordion from '../../global/accordion/accordion.component'
import TextLink from '../../global/text-link/text-link.component'

export default function FrequentQuestions() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '5010 매매 전략 관련 문의사항'
		const recipient = '5010.cs.kr@5010.tech'
		const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
			subject,
		)}`

		window.location.href = mailtoUrl
	}

	return (
		<FrequentQuestionsContainer $deviceType={deviceType}>
			<div id="section-heading-container">
				<span id="section-category-text">FAQ</span>
				<h1 id="section-heading">자주 묻는 질문들을 모아봤어요.</h1>
			</div>
			<div id="questions-container">
				<Accordion
					heading="전자책에는 지지/저항 작도법 공식이나 기술적 분석 내용이 없나요?"
					body="5010 매매 기법은 차트 분석보다는 지속 가능한 매매를 위한 매매 원칙, 전략, 자산 운용, 멘탈 관리 등을 다룬 책입니다. 누구나 쉽게 자신만의 매매 원칙과 전략을 세워 체계적이고 안전한 매매를 할 수 있도록 돕는 것이 목적입니다. 기초적인 차트 분석은 포함되나 심도 있는 기술적 분석은 배제했습니다. 대신 강의와 5010 인디케이터를 통해 지지/저항 작도 능력을 기를 수 있게 합니다. 뛰어난 테크닉만으로는 부족하며, 반드시 자신만의 매매 원칙과 전략이 뒷받침되어야 시장에서 살아남을 수 있습니다."
				/>
			</div>
			<TextLink
				description="그 외에 다른 궁금한 점들이 있으시다면"
				text="언제든지 문의주세요!"
				appearance="neutral"
				hierarchy="secondary"
				size="sm"
				underlined
				handleClick={handleGetHelp}
			/>
		</FrequentQuestionsContainer>
	)
}
