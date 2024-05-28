import { ReactNode } from 'react'

import { DeviceType } from '../../../store/deviceTypeStore'
// import { Faq } from '../../../store/serviceDataStore'

// export type AccordionProps = Faq
export type AccordionProps = {
	heading: ReactNode
	body: ReactNode
	container: boolean
	size: 'md' | 'sm'
}

export type AccordionContainerProps = {
	$deviceType: DeviceType
	$container?: boolean
	$size: 'md' | 'sm'
}
