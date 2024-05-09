import { ReviewItem } from '../../../store/contentsStore'
import { DeviceType } from '../../../store/deviceTypeStore'

export type ReviewItemProps = ReviewItem

export type ReviewItemContainerProps = {
	$deviceType: DeviceType
}
