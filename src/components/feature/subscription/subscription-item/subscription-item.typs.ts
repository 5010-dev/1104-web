import { DeviceType } from '../../../../store/deviceTypeStore'
import { Service } from '../../../../store/serviceDataStore'

type ItemHierarchy = 'primary' | 'secondary'

export type SubscriptionItemProps = {
	item: Service
	hierarchy: ItemHierarchy
}

export type SubscriptionItemContainerProps = {
	$deviceType: DeviceType
	$hierarchy: ItemHierarchy
}
