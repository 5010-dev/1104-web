import { DefaultTheme } from 'styled-components'
import { DeviceType } from '../store/layout/device-type.store'
import { LayoutSystem } from '../styles/design-system/design-system.types'

/**
 * 디바이스 타입에 따른 패딩 스타일을 반환하는 함수
 * @param theme 스타일 컴포넌트의 테마 객체
 * @param deviceType 디바이스 타입
 * @param componentType 컴포넌트 타입
 * @returns 디바이스 타입과 컴포넌트 타입에 맞는 패딩 스타일
 */
export const getDeviceTypePadding = (
	theme: DefaultTheme,
	deviceType: DeviceType,
	componentType: keyof LayoutSystem,
) => {
	switch (deviceType) {
		case 'desktop':
			return theme.layout[componentType].padding.lg
		case 'tablet':
			return theme.layout[componentType].padding.default
		case 'mobile':
			return theme.layout[componentType].padding.sm
		default:
			return ''
	}
}
