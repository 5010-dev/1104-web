import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'

import { SubscriptionItemProps } from './subscription-item.typs'
import { SubscriptionItemContainer } from './subscription-item.styles'

import Chip from '../../../global/chip/chip.component'
import Button from '../../../global/button/button.component'

export default function SubscriptionItem(props: SubscriptionItemProps) {
	const { item, hierarchy } = props
	const { plan, summary, features, price } = item

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<SubscriptionItemContainer $deviceType={deviceType} $hierarchy={hierarchy}>
			<div id="item-contents-container">
				<div id="plan-text-container">
					<span id="plan-text">{plan}</span>
					{hierarchy === 'primary' ? (
						<Chip
							id="best-tag"
							appearance="system"
							hierarchy="secondary"
							stroke="filled"
							shape="rounded3"
							text="BEST"
						/>
					) : null}
				</div>
				<div id="price-text-container">
					<h1 id="heading">
						{price !== 0 ? (
							<>
								<span id="price-caption">월 ₩</span>
								{price.toLocaleString()}
							</>
						) : (
							'무료'
						)}
					</h1>
				</div>
				<div id="description-text-container">
					<p id="body">{summary}</p>
					<div id="features-text-container">
						{features.map((item, index) => (
							<div key={index} className="feature-text">
								<FontAwesomeIcon
									icon={faCircleCheck}
									className="feature-icon"
								/>
								<span className="subheading">{item}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<div id="button-container">
				<Button
					accessibleName="button-container"
					text={price !== 0 ? '구독하기' : '체험하기'}
					appearance={hierarchy === 'primary' ? 'accent' : 'neutral'}
					hierarchy={hierarchy}
					stroke={hierarchy === 'primary' ? 'filled' : 'outlined'}
					shape="rounding"
				/>
				<span id="caption">
					{price !== 0
						? '구독 후 30일 이내 환불 가능'
						: '1:1 무료 상담 후 제공'}
				</span>
			</div>
		</SubscriptionItemContainer>
	)
}
