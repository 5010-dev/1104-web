import { MouseEvent } from 'react'
import { motion } from 'framer-motion'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'
import { usePreOrderContentsStore } from '../../../../store/contents/preOrderContentsStore'
import useFadeIn from '../../../../hooks/useFadeIn'

import { PreOrderNotificationContainer } from './pre-order-notification.styles'

import Button from '../../../global/button/button.component'

export default function PreOrderNotification() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { imageUrl, quote, body } = usePreOrderContentsStore(
		(state) => state.notification,
	)

	const { ref, fadeInVariants, controls } = useFadeIn({
		delay: 0.25,
	})

	const handleSeeNotification = (e: MouseEvent<HTMLButtonElement>) =>
		window.open(
			'https://trapezoidal-ghoul-840.notion.site/5010-ff683695613d4625a565b607c2dc356c',
			'_blank',
			'noopener,noreferrer',
		)

	return (
		<PreOrderNotificationContainer
			$deviceType={deviceType}
			$imageUrl={imageUrl}
			as={motion.div}
			ref={ref}
			variants={fadeInVariants}
			initial="hidden"
			animate={controls}
		>
			<div id="pre-order-notification-contents-container">
				<div id="pre-order-notification-quote-container">
					{quote.map((item, index) => (
						<span key={index} className="pre-order-notification-quote">
							"{item}"
						</span>
					))}
					<span
						className="pre-order-notification-quote"
						id="pre-order-notification-quote-dots"
					>
						.<br />.<br />.
					</span>
				</div>
				<p className="pre-order-notification-body">{body}</p>
				<div id="pre-order-notification-button-container">
					<span id="pre-order-notification-button-caption">
						사전예약 공지사항
					</span>
					<Button
						id="pre-order-notification-button"
						accessibleName="pre-order-notification-button-container"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						icon={<FontAwesomeIcon icon={faMagnifyingGlassChart} />}
						text="르네상스 모델 이해하기"
						handleClick={handleSeeNotification}
					/>
				</div>
			</div>
		</PreOrderNotificationContainer>
	)
}
