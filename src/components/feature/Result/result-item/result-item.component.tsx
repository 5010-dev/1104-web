import { useState, MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import AnimatedWrapper from '../../animated-wrapper/animated-wraper'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { ResultItemProps } from './result-item.types'

import Button from '../../../global/button/button.component'
import { ResultItemContainer } from './result-item.styles'
import {
	fadeAnimation,
	rotateAnimationVariants,
} from '../../../../utils/animation.utils'

export default function ResultItem(props: ResultItemProps) {
	const { voice, name, period, result, note, comment, imgUrl } = props

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
			$imgUrl={imgUrl}
			$isActivated={isActivated}
		>
			{isActivated ? (
				<AnimatedWrapper
					key="activated"
					animationProps={fadeAnimation}
					children={
						<div className="contents-container" id="active-contents-container">
							<div>
								<h3 id="result">
									{result}
									<span id="result-surfix">수익률 달성했었습니다.</span>
								</h3>
								<div id="caption-container">
									<span className="caption">
										<FontAwesomeIcon icon={faCheck} /> {period}
									</span>
									<span className="caption">
										<FontAwesomeIcon icon={faCheck} /> {note}
									</span>
								</div>
							</div>
							<p id="comment">{comment}</p>
						</div>
					}
				/>
			) : (
				<AnimatedWrapper
					key="deactivated"
					animationProps={fadeAnimation}
					children={
						<div
							className="contents-container"
							id="inactive-contents-container"
						>
							<h3 id="voice">{voice}</h3>
							<p id="name">{name}</p>
						</div>
					}
				/>
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
				icon={
					<motion.div
						variants={rotateAnimationVariants}
						animate={isActivated ? 'rotated' : 'default'}
						transition={{ duration: 0.3 }}
					>
						<FontAwesomeIcon icon={faCirclePlus} />
					</motion.div>
				}
				size="sm"
			/>
		</ResultItemContainer>
	)
}
