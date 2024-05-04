import styled, { DefaultTheme } from 'styled-components'

import {
	DeviceType,
	DeviceTypeStyledProp,
} from '../../../types/deviceType.types'

/**
 * 디바이스 타입에 따른 패딩 스타일을 반환하는 함수
 * @param props 스타일 컴포넌트에 전달되는 props
 * @returns 디바이스 타입에 맞는 패딩 스타일
 */
const getDeviceTypePadding = (theme: DefaultTheme, deviceType: DeviceType) => {
	switch (deviceType) {
		case 'desktop':
			return theme.layout.page.padding.desktop
		case 'tablet':
			return theme.layout.page.padding.tablet
		case 'mobile':
			return theme.layout.page.padding.mobile
	}
}

export const PageLayoutContainer = styled.div<DeviceTypeStyledProp>`
	width: 100%;
	min-width: ${({ theme }) => theme.layout.page.minWidth};
	/* min-height: calc(100vh - 4.25rem); */
	min-height: ${({ theme }) => theme.layout.page.height};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.page.gutter};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType)};
`

export default PageLayoutContainer
