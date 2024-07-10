import { MouseEvent, forwardRef } from 'react'
import { ROUTES } from '../../../routes/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { getHelp } from '../../../utils/customer-service.utils'

import { ServiceItemTopProps } from './service-item-top.types'
import { ServiceItemTopContainer } from './service-item-top.styles'

import Chip from '../../global/chip/chip.component'
import Card from '../../global/card/card.component'
import Button from '../../global/button/button.component'
import TextLink from '../../global/text-link/text-link.component'

const ServiceItemTop = forwardRef<HTMLDivElement, ServiceItemTopProps>(
	(props, ref) => {
		const { item } = props

		const deviceType = useDeviceTypeStore((state) => state.deviceType)
		const navigate = useNavigateWithScroll()

		const handleGetHelp = (e: MouseEvent<HTMLSpanElement>) => {
			const subject = '서비스 구매 관련 문의사항'
			getHelp(subject)
		}

		const handleCheckout = (e: MouseEvent<HTMLButtonElement>) => {
			navigate(
				`${ROUTES.CHECKOUT}?id=${item.id}&name=${item.title}&plan=${item.plan}`,
			)
		}

		return (
			<ServiceItemTopContainer $deviceType={deviceType} ref={ref}>
				<img
					id="service-item-img"
					src={item.thumbnail_image_url}
					alt="service-item-img"
				/>
				<div id="service-item-title-container">
					<div id="service-item-heading-container">
						{item.badges.length !== 0 ? (
							<div id="service-item-tags-container">
								{item.badges.map((item, index) => (
									<Chip
										key={index}
										text={item.toUpperCase()}
										appearance="accent"
										hierarchy="primary"
										stroke="filled"
										shape="rounded3"
										size="sm"
										inverted
									/>
								))}
							</div>
						) : null}
						<h1 id="service-item-name">{item.title}</h1>
						<span id="service-item-subheading">{item.plan} PLAN</span>
					</div>
					<Card
						className="service-item-card"
						hierarchy="secondary"
						opacity={0.1}
					>
						<ul className="service-item-ul">
							{item.overviews.map((item, index) => (
								<li key={index} className="service-item-li">
									{item}
								</li>
							))}
						</ul>
					</Card>
					<div id="service-item-price-container">
						<span id="service-item-price">
							₩ {Number(item.price).toLocaleString()}
						</span>
						{/* <span id="service-item-price-caption">{item.price_caption}</span> */}
					</div>
					<Button
						id="service-item-purchase-button"
						accessibleName="service-item-title-container"
						appearance="accent"
						hierarchy="primary"
						stroke="filled"
						shape="rounding"
						icon={<FontAwesomeIcon icon={faCreditCard} />}
						text={item.is_subscribed ? '서비스 이용중' : '서비스 구매하기'}
						handleClick={handleCheckout}
						disabled={item.is_subscribed}
					/>
					<TextLink
						appearance="neutral"
						hierarchy="secondary"
						size="sm"
						description="도움이 필요하시다면"
						text="여기를 클릭해 주세요."
						handleClick={handleGetHelp}
					/>
				</div>
			</ServiceItemTopContainer>
		)
	},
)

export default ServiceItemTop
