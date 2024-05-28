import Accordion from '../../../global/accordion/accordion.component'

import { FrequentQuestionsItemProps } from './frequent-questions-item.types'

export default function FrequentQuestionsItem(
	props: FrequentQuestionsItemProps,
) {
	const { heading, body, details } = props

	return (
		<Accordion
			heading={<h3 id="heading">{heading}</h3>}
			body={
				<>
					<p id="body">{body}</p>
					{details ? (
						<ul id="details-container">
							{details.map((item, index) => (
								<li key={index} className="detail-text">
									{item}
								</li>
							))}
						</ul>
					) : null}
				</>
			}
			container
			size="md"
		/>
	)
}
