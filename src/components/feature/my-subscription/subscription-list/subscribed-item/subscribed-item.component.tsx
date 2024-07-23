import { SubscribedItemProps } from './subscribed-item.types'
import { SubscribedItemContainer } from './subscribed-item.styles'

import Chip from '../../../../global/chip/chip.component'

export default function SubscribedItem(props: SubscribedItemProps) {
	const { item } = props
	const { product, is_setup_completed } = item
	const { title, plan } = product

	return (
		<SubscribedItemContainer className="subscribed-item-container">
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
					{title} | {plan}
				</p>
			</div>
		</SubscribedItemContainer>
	)
}
