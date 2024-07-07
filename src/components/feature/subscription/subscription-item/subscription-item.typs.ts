import { DeviceType } from '../../../../store/layout/device-type.store'
import { ProductListItem } from '../../../../services/product/product-service.types'

type ItemHierarchy = 'primary' | 'secondary'

export type SubscriptionItemProps = {
	item: ProductListItem
	hierarchy: ItemHierarchy
}

export type SubscriptionItemContainerProps = {
	$deviceType: DeviceType
	$hierarchy: ItemHierarchy
}
