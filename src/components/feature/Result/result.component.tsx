import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

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
			</div>
		</ResultContainer>
	)
}
