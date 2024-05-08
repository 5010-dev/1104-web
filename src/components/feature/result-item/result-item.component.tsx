import { useState, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import Button from '../../global/button/button.component'
import { ResultItemContainer } from './result-item.styles'

type ResultItemProps = {
	voice: string
	name: string
	period: string
	result: string
	note: string
	comment: string
}

export default function ResultItem(props: ResultItemProps) {
	const { voice, name, period, result, note, comment } = props

	const [isActivated, setIsActivated] = useState<boolean>(false)
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
		setIsActivated(!isActivated)
	}

	return (
		<ResultItemContainer
			$deviceType={deviceType}
			$appearance="neutral"
			$hierarchy="primary"
			$stroke="filled"
			$shape="rounded2"
		>
			{isActivated ? (
				<div className="contents-container" id="active-contents-container">
					<div id="text-container">
						<span id="period">{period}</span>
						<h3 id="result">
							{result}
							<span id="result-surfix">달성했었습니다.</span>
						</h3>
						<span id="note">{note}</span>
					</div>
					<p id="comment">{comment}</p>
				</div>
			) : (
				<div className="contents-container" id="inactive-contents-container">
					<h3 id="voice">{voice}</h3>
					<p id="name">{name}</p>
				</div>
			)}
			<Button
				className="see-result-button"
				accessibleName="contents-container"
				text="수강 후 결과"
				appearance="neutral"
				hierarchy="primary"
				stroke="filled"
				shape="rounding"
				handleClick={handleClick}
				icon={<FontAwesomeIcon icon={faCirclePlus} />}
				size="sm"
			/>
		</ResultItemContainer>
	)
}
