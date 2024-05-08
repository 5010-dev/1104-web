import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import ResultItem from '../result-item/result-item.component'

import { ResultContainer } from './result.styles'

export default function Result() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { heading, items } = useContentsStore((state) => state.result)

	return (
		<ResultContainer $deviceType={deviceType}>
			<div id="components-container">
				<div id="section-heading-container">
					<span id="section-category-text">RESULT</span>
					<h1 id="section-heading">{heading}</h1>
				</div>
				<div id="items-container">
					{items.map((item, index) => (
						<ResultItem
							key={index}
							voice={item.voice}
							name={`${item.name.charAt(0)}OO 님`}
							period={item.period}
							result={item.result}
							note={item.note}
							comment={item.comment}
							imgUrl={item.imgUrl}
							linkUrl=""
						/>
					))}
				</div>
			</div>
		</ResultContainer>
	)
}
