import { ReviewItem } from '../../../store/contents/home-contents/home-contents.types'
import { DeviceType } from '../../../store/layout/device-type.store'

export type ReviewItemProps = ReviewItem & { id?: string; className?: string }

export type ReviewItemContainerProps = {
	$deviceType: DeviceType
}
