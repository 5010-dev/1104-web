import { MouseEvent } from 'react'
import { ROUTES } from '../../../../../routes/routes'

import useNavigateWithScroll from '../../../../../hooks/use-navigate-with-scroll'

import { SubscribedItemProps } from './subscribed-item.types'
import { SubscribedItemContainer } from './subscribed-item.styles'

import Chip from '../../../../global/chip/chip.component'
import Button from '../../../../global/button/button.component'

export default function SubscribedItem(props: SubscribedItemProps) {
	const { item } = props
	const {
		product,
		product_title,
		product_plan,
		is_setup_completed,
		// started,
		ended,
	} = item
	const navigate = useNavigateWithScroll()

	const isDatePassed = (): boolean => {
		const targetDate = new Date(ended)
		const currentDate = new Date()

		// 날짜만 비교하기 위해 시간을 00:00:00으로 설정
		targetDate.setHours(0, 0, 0, 0)
		currentDate.setHours(0, 0, 0, 0)

		return currentDate > targetDate
	}

	// const calculateDaysLeft = (): number => {
	// 	const targetDate = new Date(ended)
	// 	const currentDate = new Date()

	// 	// 날짜만 비교하기 위해 시간을 00:00:00으로 설정
	// 	targetDate.setHours(0, 0, 0, 0)
	// 	currentDate.setHours(0, 0, 0, 0)

	// 	// 밀리초 차이를 일 단위로 변환
	// 	const timeDiff = targetDate.getTime() - currentDate.getTime()
	// 	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24))

	// 	return Math.max(daysDiff, 0)
	// }

	const handleRepurchase = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(ROUTES.SERVICE_ITEM.createPath(product))

	return (
		<SubscribedItemContainer
			className="subscribed-item-container"
			$isExpired={isDatePassed()}
		>
			<div className="subscribed-item-contents-container">
				<Chip
					appearance={is_setup_completed ? 'accent' : 'neutral'}
					hierarchy={is_setup_completed ? 'primary' : 'secondary'}
					stroke="filled"
					shape="rounded3"
					text={is_setup_completed ? '서비스 셋팅 완료' : '서비스 셋팅 진행중'}
					inverted={is_setup_completed}
				/>
				<p className="subscribed-item-heading">
					{product_title} | {product_plan}
				</p>
				{/* <div className="subscribed-item-period-container">
					<p className="subscribed-item-timer">
						{isDatePassed() ? '기간 만료' : `${calculateDaysLeft()}일 남음`}
					</p>
					<div className="subscribed-item-date-container">
						<span className="subscribed-item-date">
							구독 시작일 <span>{started}</span>
						</span>
						<span className="subscribed-item-date">
							구독 만료일 <span>{ended}</span>
						</span>
					</div>
				</div> */}
			</div>
			{isDatePassed() ? (
				<Button
					className="repurchase-button"
					accessibleName="subscribed-item-container"
					appearance="neutral"
					hierarchy="secondary"
					stroke="outlined"
					shape="rounding"
					size="sm"
					text="서비스 재구매하기 →"
					handleClick={handleRepurchase}
				/>
			) : null}
		</SubscribedItemContainer>
	)
}
