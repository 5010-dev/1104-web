import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'

import { DeviceType } from '../store/deviceTypeStore'
import designTokens from '../styles/degisn-tokens/design-tokens.tokens'

/**
 * 현재 디바이스의 타입(데스크톱, 태블릿, 모바일)을 판단하는 커스텀 훅입니다.
 * @returns {DeviceType} 현재 디바이스 타입 ('desktop', 'tablet', 'mobile')
 */
export default function useDeviceType(): DeviceType {
	const [deviceType, setDeviceType] = useState<DeviceType>('desktop')

	// 미디어 쿼리를 사용하여 현재 디바이스의 화면 너비에 따라 타입 판단
	const isDesktop = useMediaQuery({
		query: `(min-width: ${designTokens.layout.breakpoint.desktop}px)`,
	})
	const isTablet = useMediaQuery({
		query: `(min-width: ${
			designTokens.layout.breakpoint.tablet
		}px) and (max-width: ${designTokens.layout.breakpoint.desktop - 1}px)`,
	})
	const isMobile = useMediaQuery({
		query: `(max-width: ${designTokens.layout.breakpoint.tablet - 1}px)`,
	})

	// 디바이스 타입 변경 시 상태 업데이트
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
