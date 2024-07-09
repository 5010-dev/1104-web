import { SubscribedItem } from '../../../../../services/payment/payment-service.types'

export type SubscribedItemProps = { item: SubscribedItem }

export type SubscribedItemContainerProps = {
	$isExpired: boolean
}
