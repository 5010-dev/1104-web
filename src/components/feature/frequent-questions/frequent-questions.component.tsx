import { useEffect, useState, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useFaqDataStore } from '../../../store/data/service-data/service-data.store'
import { FaqList } from '../../../store/data/service-data/service-data.store.types'

import { getHelp } from '../../../utils/customer-service.utils'

import { FrequentQuestionsProps } from './frequent-questions.types'
import { FrequentQuestionsContainer } from './frequent-questions.styles'

import FrequentQuestionsItem from './frequent-questions-item/frequent-questions-item.component'
import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

export default function FrequentQuestions(props: FrequentQuestionsProps) {
	const { variant, showTabs } = props
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { indicatorFaq, quantFaq } = useFaqDataStore((state) => state)
	const [faqVariant, setFaqVariant] = useState<string>(variant)
	const [faqList, setFaqList] = useState<FaqList>(indicatorFaq)

	const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '5010 매매 전략 관련 문의사항'
		getHelp(subject)
	}

	const handleVariantChange = (
		e: MouseEvent<HTMLButtonElement>,
		variant: string,
	) => setFaqVariant(variant)

	useEffect(() => {
		switch (faqVariant) {
			case 'INDICATOR':
				setFaqList(indicatorFaq)
				return
			case 'QUANT':
				setFaqList(quantFaq)
				return
		}
	}, [faqVariant, indicatorFaq, quantFaq])

	return (
		<FrequentQuestionsContainer $deviceType={deviceType}>
			<div id="section-heading-container">
				<span id="section-category-text">FAQ</span>
				<h1 id="section-heading">자주 묻는 질문들을 모아봤어요.</h1>
			</div>

			{showTabs ? (
				<div id="questions-tabs-container">
					<Button
						className="questions-tab"
						accessibleName="questions-tabs-container"
						appearance="neutral"
						hierarchy={faqVariant === 'INDICATOR' ? 'secondary' : 'tertiary'}
						stroke="filled"
						shape="rounding"
						text="5010 매매 전략"
						size="sm"
						icon={
							faqVariant === 'INDICATOR' ? (
								<FontAwesomeIcon icon={faCircleCheck} />
							) : undefined
						}
						handleClick={(e) => handleVariantChange(e, 'INDICATOR')}
					/>
					<Button
						className="questions-tab"
						accessibleName="questions-tabs-container"
						appearance="neutral"
						hierarchy={faqVariant === 'QUANT' ? 'secondary' : 'tertiary'}
						stroke="filled"
						shape="rounding"
						text="퀀트 솔루션"
						size="sm"
						icon={
							faqVariant === 'QUANT' ? (
								<FontAwesomeIcon icon={faCircleCheck} />
							) : undefined
						}
						handleClick={(e) => handleVariantChange(e, 'QUANT')}
					/>
				</div>
			) : null}

			<div id="questions-container">
				{faqList.list.map((item, index) => (
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
