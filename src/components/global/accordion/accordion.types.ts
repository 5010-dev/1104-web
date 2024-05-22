import { DeviceType } from '../../../store/deviceTypeStore'
import { Faq } from '../../../store/serviceDataStore'

export type AccordionProps = Faq

export type AccordionContainerProps = {
	$deviceType: DeviceType
}
