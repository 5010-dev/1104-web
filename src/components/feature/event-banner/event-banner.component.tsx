import { useDeviceTypeStore } from '../../../store/layout/device-type.store'

import { EventBannerVariants, EventBannerProps } from './event-banner.types'
import { EventBannerContainer } from './event-banner.styles'

import Chip from '../../global/chip/chip.component'

export default function EventBanner(props: EventBannerProps) {
	const { variants } = props
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	const renderComponent = (variants: EventBannerVariants) => {
		switch (variants) {
			case 'modal':
				return <div></div>
			case 'inline':
				return (
					<EventBannerContainer $deviceType={deviceType}>
						<Chip
							appearance="neutral"
							hierarchy="secondary"
							text="런칭 기념 이벤트"
						/>
						<h3 className="event-banner-heading">10% 할인혜택 적용중!</h3>
						<p className="event-banner-caption">
							할인 적용된 가격 등, 자세한 내용은 주문 요청 이후 발송되는
							이메일에서 확인하실 수 있어요.
						</p>
					</EventBannerContainer>
				)
		}
	}

	return renderComponent(variants)
}
