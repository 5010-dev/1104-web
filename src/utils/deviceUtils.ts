import { DeviceType } from '../types/deviceType.types'
import { DefaultTheme } from 'styled-components'

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
	componentType: string,
) => {
	switch (deviceType) {
		case 'desktop':
			return theme.layout[componentType].padding.desktop
		case 'tablet':
			return theme.layout[componentType].padding.tablet
		case 'mobile':
			return theme.layout[componentType].padding.mobile
		default:
			return ''
	}
}
