import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { ROUTES } from '../../../routes/routes'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useServiceDataStore } from '../../../store/data/service-data/service-data.store'
import useNavigateWithScroll from '../../../hooks/use-navigate-with-scroll'

import { EventBannerProps } from './event-banner.types'
import { EventBannerContainer } from './event-banner.styles'

import Chip from '../../global/chip/chip.component'
import Button from '../../global/button/button.component'

export default function EventBanner(props: EventBannerProps) {
	const { variants, handleClose } = props
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { serviceList } = useServiceDataStore()
	const navigate = useNavigateWithScroll()

	const itemId = 3

	const item = serviceList.find((item) => item.id === itemId)

	const handleCheckout = () => {
		if (item) {
			navigate(
				`${ROUTES.CHECKOUT}?id=${item.id}&name=${item.title}&plan=${item.plan}`,
			)
		}
	}

	const bannerBody = () => {
		return (
			<EventBannerContainer
				$deviceType={deviceType}
				$variants={variants}
				className="event-banner"
			>
				<div id="event-banner-contents-container">
					{variants === 'modal' ? (
						<button className="event-banner-close-button" onClick={handleClose}>
							<FontAwesomeIcon
								icon={faXmark}
								className="event-banner-close-button-text"
							/>
							<span className="event-banner-close-button-text">닫기</span>
						</button>
					) : null}
					<div id="event-banner-text-container">
						<div id="event-banner-title-container">
							<Chip
								appearance="neutral"
								hierarchy="secondary"
								text="런칭 기념 이벤트"
							/>
							<h3 className="event-banner-heading">10% 할인혜택 적용중!</h3>
							<span className="event-banner-period">
								2024.07.10. ~ 2024.08.31.
							</span>
						</div>
						<p className="event-banner-caption">
							할인 적용된 가격 등, 자세한 혜택 내용은 주문 요청 이후 안내드리고
							있어요.
						</p>
					</div>
					{variants === 'modal' ? (
						<Button
							id="event-banner-button"
							accessibleName="event-banner-contents-container"
							appearance="neutral"
							hierarchy="secondary"
							stroke="filled"
							shape="rounding"
							size="sm"
							text="지금 바로 주문하기 →"
							handleClick={handleCheckout}
						/>
					) : null}
				</div>
			</EventBannerContainer>
		)
	}

	switch (variants) {
		case 'modal':
			return createPortal(bannerBody(), document.body)
		case 'inline':
			return bannerBody()
	}
}
