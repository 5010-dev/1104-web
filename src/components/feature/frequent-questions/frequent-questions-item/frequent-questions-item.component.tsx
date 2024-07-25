import Accordion from '../../../global/accordion/accordion.component'

import { FrequentQuestionsItemProps } from './frequent-questions-item.types'

export default function FrequentQuestionsItem(
	props: FrequentQuestionsItemProps,
) {
	const { title, description, details } = props

	return (
		<Accordion
			heading={<h3 id="heading">{title}</h3>}
			body={
				<>
					{details ? (
						<ul id="details-container">
							{details.map((item, index) => (
								<li key={index} className="detail-text">
									{item}
								</li>
							))}
						</ul>
					) : null}
					<p id="body">{description}</p>
				</>
			}
			container
			size="md"
		/>
	)
}
