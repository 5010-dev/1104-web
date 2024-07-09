import { BillingItemProps } from './billing-item.types'
import { BillingItemContainer } from './billing-item.styles'

import Button from '../../../../global/button/button.component'

export default function BillingItem(props: BillingItemProps) {
	const { date, service, price } = props

	const formatNumber = (num: number): string => {
		return num.toLocaleString()
	}

	return (
		<BillingItemContainer>
			<div className="text-container">
				<span className="caption">{date}</span>
				<p className="subheading">{service}</p>
				<p className="body">₩{formatNumber(price)}</p>
			</div>
			<Button
				text="영수증"
				appearance="neutral"
				hierarchy="tertiary"
				stroke="filled"
				shape="rounding"
				size="sm"
			/>
		</BillingItemContainer>
	)
}
