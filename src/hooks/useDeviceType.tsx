import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

import { DeviceType } from '../types/deviceType.types'
import designTokens from '../styles/design-tokens'

export default function useDeviceType(): DeviceType {
	const [deviceType, setDeviceType] = useState<DeviceType>('desktop')

	const isDesktop = useMediaQuery({
		query: `(min-width: ${designTokens.layout.breakpoint.desktop}px)`,
	})
	const isTablet = useMediaQuery({
		query: `(min-width: ${designTokens.layout.breakpoint.tablet}px) and (max-width: designTokens.layout.breakpoint.desktop - 1)`,
	})
	const isMobile = useMediaQuery({
		query: `(max-width: ${designTokens.layout.breakpoint.tablet - 1}px)`,
	})

	useEffect(() => {
		if (isDesktop) {
			setDeviceType('desktop')
		} else if (isTablet) {
			setDeviceType('tablet')
		} else if (isMobile) {
			setDeviceType('mobile')
		}
	}, [isDesktop, isTablet, isMobile])

	return deviceType
}
