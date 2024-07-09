import { MouseEvent } from 'react'

import { BillingItemProps } from './billing-item.types'
import { BillingItemContainer } from './billing-item.styles'

import Button from '../../../../global/button/button.component'

export default function BillingItem(props: BillingItemProps) {
	const { item } = props
	const { product_title, product_plan, total_price, receipt_url, done_at } =
		item

	const formatNumber = (num: number): string => {
		return num.toLocaleString()
	}

	const getFormattedDate = (date: string): string[] => {
		const [datePart, timePart] = date.split('T')
		return [datePart, timePart]
	}

	const handleSeeReceipt = (e: MouseEvent<HTMLButtonElement>) =>
		window.open(receipt_url, '_blank', 'noopener,noreferrer')

	return (
		<BillingItemContainer>
			<div className="text-container">
				{done_at ? (
					<span className="caption">
						{getFormattedDate(done_at)[0]} {getFormattedDate(done_at)[1]}
					</span>
				) : null}
				<p className="subheading">
					{product_title} | {product_plan}
				</p>
				<p className="body">₩{formatNumber(Number(total_price))}</p>
			</div>
			<Button
				text="영수증"
				appearance="neutral"
				hierarchy="tertiary"
				stroke="filled"
				shape="rounding"
				size="sm"
				handleClick={handleSeeReceipt}
			/>
		</BillingItemContainer>
	)
}
