import { MouseEvent } from 'react'
import { ROUTES } from '../../../../routes/routes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { useDeviceTypeStore } from '../../../../store/layout/device-type.store'
import { useAuthDataStore } from '../../../../store/data/auth-data/auth-data.store'
import { useToastMessageStore } from '../../../../store/layout/global-ui.store'
import useNavigateWithScroll from '../../../../hooks/useNavigateWithScroll'

import { SubscriptionItemProps } from './subscription-item.typs'
import { SubscriptionItemContainer } from './subscription-item.styles'

import Chip from '../../../global/chip/chip.component'
import Button from '../../../global/button/button.component'

export default function SubscriptionItem(props: SubscriptionItemProps) {
	const { item, hierarchy } = props
	const { plan, id, title, badges, summary, overviews, price, price_caption } =
		item
	const numberedPrice = Number(price)

	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { userId } = useAuthDataStore((state) => state.loginUser)
	const { updateToastMessage } = useToastMessageStore()
	const navigate = useNavigateWithScroll()

	const handleSubscribe = (e: MouseEvent<HTMLButtonElement>) => {
		if (userId) {
			navigate(`${ROUTES.CHECKOUT}?id=${id}&name=${title}&plan=${plan}`)
		} else {
			navigate(ROUTES.LOGIN, { routeState: 'signup' })
			updateToastMessage('회원가입 및 로그인이 필요합니다.')
		}
	}
	const handleTryFree = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.FREE_TRIAL)

	return (
		<SubscriptionItemContainer $deviceType={deviceType} $hierarchy={hierarchy}>
			<div id="item-contents-container">
				<div id="plan-text-container">
					<span id="plan-text">{plan}</span>
					{badges.map((item, index) => (
						<Chip
							key={index}
							id="best-tag"
							appearance="system"
							hierarchy="secondary"
							stroke="filled"
							shape="rounded3"
							text={item.toUpperCase()}
						/>
					))}
				</div>
				<div id="price-text-container">
					<span id="service-name">{title}</span>
					<h1 id="heading">
						{numberedPrice !== 0 ? (
							<>
								<span id="price-caption">₩</span>
								{numberedPrice.toLocaleString()}
							</>
						) : (
							'무료'
						)}
					</h1>
					<span id="price-text-caption">{price_caption}</span>
				</div>
				<div id="description-text-container">
					<p id="body">{summary}</p>
					<div id="features-text-container">
						{overviews.map((item, index) => (
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
					text={numberedPrice !== 0 ? '지금 구매하기 →' : '무료 체험하기 →'}
					appearance={hierarchy === 'primary' ? 'accent' : 'neutral'}
					hierarchy={hierarchy}
					stroke={hierarchy === 'primary' ? 'filled' : 'outlined'}
					// stroke="filled"
					shape="rounding"
					handleClick={numberedPrice !== 0 ? handleSubscribe : handleTryFree}
				/>
				<span id="caption">
					{numberedPrice !== 0
						? '구매 후 7일 이내 환불 가능'
						: '1:1 무료 상담 후 제공'}
				</span>
			</div>
		</SubscriptionItemContainer>
	)
}
