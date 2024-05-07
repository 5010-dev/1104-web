import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { AchievementContainer } from './achievement.styles'
import Button from '../../global/button/button.component'

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
						<div key={index} className="item-container">
							<div className="title-container">
								<span className="caption">{item.caption}</span>
								<h2 className="heading">{item.heading}</h2>
							</div>
							<div className="body-container">
								<p className="body">{item.body}</p>
								<Button
									className="link-button"
									accessibleName="Link Button"
									icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
									text={deviceType === 'mobile' ? '' : '더 보기'}
									appearance="neutral"
									hierarchy="secondary"
									stroke="filled"
									shape="rounding"
									size="sm"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</AchievementContainer>
	)
}
