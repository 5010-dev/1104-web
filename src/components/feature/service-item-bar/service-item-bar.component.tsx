import { MouseEvent } from 'react'
import { ROUTES } from '../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { ServiceItemBarProps } from './service-item-bar.types'
import { ServiceItemBarContainer } from './service-item-bar.styles'

import Button from '../../global/button/button.component'

export default function ServiceItemBar(props: ServiceItemBarProps) {
	const { item, showBar } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const navigate = useNavigateWithScroll()

	const handleCheckout = (e: MouseEvent<HTMLButtonElement>) => {
		navigate(
			`${ROUTES.CHECKOUT}?id=${item.id}&name=${item.title}&plan=${item.plan}`,
		)
	}

	return (
		<ServiceItemBarContainer
			$deviceType={deviceType}
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: showBar ? 1 : 0 }}
			transition={{ duration: 0.5 }}
			id="service-item-bar-container"
		>
			<div id="service-item-bar-contents-container">
				{deviceType !== 'mobile' ? (
					<div id="service-item-bar-left-column">
						<img
							id="service-item-bar-img"
							src={item.thumbnail_image_url}
							alt="service-item-bar-img"
						/>
						<div id="service-item-bar-text-container">
							<h2 id="service-item-bar-heading">
								{item.title} | {item.plan}
							</h2>
							<span id="service-item-bar-price">
								₩{Number(item.price).toLocaleString()}
							</span>
						</div>
					</div>
				) : null}
				<Button
					id="service-item-bar-button"
					accessibleName="service-item-bar-container"
					appearance={item.is_subscribed ? 'neutral' : 'accent'}
					hierarchy="primary"
					stroke="filled"
					shape="rounding"
					icon={<FontAwesomeIcon icon={faCreditCard} />}
					text={item.is_subscribed ? '서비스 이용중' : '서비스 구매하기'}
					size={deviceType === 'mobile' ? 'md' : 'sm'}
					handleClick={handleCheckout}
					disabled={item.is_subscribed}
				/>
			</div>
		</ServiceItemBarContainer>
	)
}
