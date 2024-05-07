import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { AchievementContainer } from './achievement.styles'
import AchievementItem from '../achievement-item/achievement-item.component'

export default function Achievement() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { heading, items } = useContentsStore((state) => state.achievement)

	return (
		<AchievementContainer $deviceType={deviceType}>
			<div id="components-container">
				<div id="section-heading-container">
					<span id="section-category-text">ACHIEVEMENT</span>
					<h1 id="section-heading">{heading}</h1>
				</div>
				<div id="items-container">
					{items.map((item, index) => (
						<AchievementItem
							key={index}
							caption={item.caption}
							heading={item.heading}
							body={item.body}
							linkUrl={item.linkUrl}
						/>
					))}
				</div>
			</div>
		</AchievementContainer>
	)
}
