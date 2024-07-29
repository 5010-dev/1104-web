import { PaymentStatus } from '../../../../../services/payment/payment-service.types'

import { getFormattedDate } from '../../../../../utils/date.utils'

import { BillingItemProps } from './billing-item.types'
import { BillingItemContainer } from './billing-item.styles'

import Chip from '../../../../global/chip/chip.component'

export default function BillingItem(props: BillingItemProps) {
	const { item } = props
	const {
		product,
		order_number,
		total_price,
		payment_status,
		pending,
		completed,
		partial_payment,
		canceled,
		installments,
	} = item

	const formatNumber = (num: number): string => {
		return num.toLocaleString()
	}

	const getPaymentStatusDescription = (status: PaymentStatus) => {
		switch (status) {
			case 'PENDING':
				return '주문 진행중'
			case 'COMPLETED':
				return '결제 완료'
			case 'PARTIAL_PAYMENT':
				return `분납 (${getPaidMonth()}/${installments.length}개월)`
			case 'CANCELED':
				return '주문 취소'
		}
	}

	const getPaymentDate = (status: PaymentStatus) => {
		switch (status) {
			case 'PENDING':
				return `주문 요청일: ${getFormattedDate(pending)[0]} ${
					getFormattedDate(pending)[1]
				}`
			case 'COMPLETED':
				return `주문 완료일: ${getFormattedDate(completed)[0]} ${
					getFormattedDate(completed)[1]
				}`
			case 'PARTIAL_PAYMENT':
				return `부분 결제일: ${getFormattedDate(partial_payment)[0]} ${
					getFormattedDate(partial_payment)[1]
				}`
			case 'CANCELED':
				return `주문 취소일: ${getFormattedDate(canceled)[0]} ${
					getFormattedDate(canceled)[1]
				}`
		}
	}

	const isTurnkeyPurchase = () => {
		return installments.length <= 1
	}

	const getPaidMonth = () => {
		const paidMonth = installments.reduce(
			(acc, item) => (item.is_paid ? acc + 1 : acc),
			0,
		)
		return paidMonth
	}

	const getPaidAmount = () => {
		const paidAmount = installments.reduce(
			(acc, item) => acc + Number(item.price),
			0,
		)
		return paidAmount
	}

	return (
		<BillingItemContainer>
			<div className="text-container">
				<span className="caption order-number-caption">
					주문번호: {order_number}
				</span>
				<div className="subheading-container">
					<p className="subheading">
						{product.title} | {product.plan}
					</p>
					<Chip
						appearance="neutral"
						hierarchy="secondary"
						text={getPaymentStatusDescription(payment_status)}
						className="subheading-chip"
					/>
				</div>
				{isTurnkeyPurchase() ? (
					<p className="body">₩{formatNumber(Number(total_price))}</p>
				) : (
					<p className="body">
						₩{formatNumber(Number(total_price))} | 납부 완료: ₩{getPaidAmount()}
					</p>
				)}

				<span className="caption date-caption">
					{getPaymentDate(payment_status)}
				</span>
			</div>
		</BillingItemContainer>
	)
}
