import { DeviceType } from '../../../store/deviceTypeStore'

export type AccordionProps = {
	heading: string
	body: string
}

export type AccordionContainerProps = {
	$deviceType: DeviceType
}
