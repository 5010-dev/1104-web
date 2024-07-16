import { ReactNode } from 'react'
import { DeviceType } from '../../../store/layout/device-type.store'

export type AccordionProps = {
	heading: ReactNode
	body: ReactNode
	container: boolean
	size: 'md' | 'sm'
	defaultOpen?: boolean
}

export type AccordionContainerProps = {
	$deviceType: DeviceType
	$container?: boolean
	$size: 'md' | 'sm'
}
