import { MouseEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'

import { AchievementItemProps } from './achievement-item.types'
import { AchievementItemContainer } from './achievement-item.styles'
import Button from '../../../global/button/button.component'

export default function AchievementItem(props: AchievementItemProps) {
	const { caption, heading, body, linkUrl } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const handleClick = (e: MouseEvent<HTMLButtonElement>, url: string): void => {
		e.preventDefault()
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<AchievementItemContainer $deviceType={deviceType}>
			<div className="title-container">
				<span className="caption">{caption}</span>
				<h2 className="heading">{heading}</h2>
			</div>
			<div className="body-container">
				<p className="body">{body}</p>
				<Button
					className="link-button"
					accessibleName="heading"
					icon={<FontAwesomeIcon icon={faUpRightFromSquare} />}
					text={deviceType === 'mobile' ? '' : '더 보기'}
					appearance="neutral"
					hierarchy="secondary"
					stroke="filled"
					shape="rounding"
					size="sm"
					handleClick={(e) => handleClick(e, linkUrl)}
				/>
			</div>
		</AchievementItemContainer>
	)
}
