import { useEffect, useState, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useFaqDataStore } from '../../../store/data/service-data/service-data.store'
import { FaqList } from '../../../store/data/service-data/service-data.store.types'
import { getProductFaqs } from '../../../services/product/product-service'

import { getHelp } from '../../../utils/customer-service.utils'

import { FrequentQuestionsProps } from './frequent-questions.types'
import { FrequentQuestionsContainer } from './frequent-questions.styles'

import FrequentQuestionsItem from './frequent-questions-item/frequent-questions-item.component'
import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'
import Card from '../../global/card/card.component'
import WarningText from '../warning-text/warning-text.component'

export default function FrequentQuestions(props: FrequentQuestionsProps) {
	const { variant, showTabs } = props
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { indicatorFaq, quantFaq, updateFaqData } = useFaqDataStore(
		(state) => state,
	)
	const [faqVariant, setFaqVariant] = useState<string>(variant)
	const [faqList, setFaqList] = useState<FaqList>(indicatorFaq)
	const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

	const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
		const subject = '5010 매매 전략 관련 문의사항'
		getHelp(subject)
	}

	const handleVariantChange = (
		e: MouseEvent<HTMLButtonElement>,
		variant: string,
	) => setFaqVariant(variant)

	useEffect(() => {
		const fetchFaqData = async () => {
			try {
				setIsDataLoaded(false)

				const [indicatorFaqs, quantFaqs] = await Promise.all([
					getProductFaqs(2),
					getProductFaqs(3),
				])

				updateFaqData('indicatorFaq', indicatorFaqs)
				updateFaqData('quantFaq', quantFaqs)
			} catch (error: any) {
				console.log(error.message)
			} finally {
				setIsDataLoaded(true)
			}
		}

		fetchFaqData()
	}, [updateFaqData])

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

			{!isDataLoaded ? (
				<WarningText message="오류가 발생했습니다. 새로고침하거나 잠시 후 다시 시도해 주세요." />
			) : (
				<div id="questions-container">
					{faqList.list.map((item, index) => (
						<FrequentQuestionsItem
							key={index}
							title={item.title}
							description={item.description}
							details={item.details.length !== 0 ? item.details : undefined}
						/>
					))}
					{faqList.disclaimer ? (
						<Card hierarchy="tertiary" opacity={0.5} id="quetions-disclaimer">
							{faqList.disclaimer}
						</Card>
					) : null}
				</div>
			)}

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
