import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useFaqDataStore } from '../../../store/data/service-data/service-data.store'

import { FrequentQuestionsContainer } from './frequent-questions.styles'

import FrequentQuestionsItem from './frequent-questions-item/frequent-questions-item.component'
import TextLink from '../../global/text-link/text-link.component'

export default function FrequentQuestions() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const faq = useFaqDataStore((state) => state.faq)

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
				{faq.map((item, index) => (
					<FrequentQuestionsItem
						key={index}
						heading={item.heading}
						body={item.body}
						details={item.details ? item.details : undefined}
					/>
				))}
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
