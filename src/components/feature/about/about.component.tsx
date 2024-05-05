import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { AboutContainer } from './about.styles'

export default function About() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { heading, body, caption } = useContentsStore(
		(state) => state.about.text,
	)
	const { items } = useContentsStore((state) => state.about)

	return (
		<AboutContainer $deviceType={deviceType}>
			<div id="text-container">
				<span id="section-category-text">ABOUT</span>
				<h1 id="heading">{heading}</h1>
				<p id="body">{body}</p>
				<span id="caption">{caption}</span>
			</div>
			<div id="items-container">
				{items.map((item, index) => (
					<div key={index} className="item-container">
						<h3 className="item-subheading">{item.subheading}</h3>
						<h3 className="item-heading">{item.heading}</h3>
					</div>
				))}
			</div>
		</AboutContainer>
	)
}
