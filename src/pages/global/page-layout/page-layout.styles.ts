import styled from 'styled-components'

import { DeviceType } from '../../../store/layout/device-type.store'
import { getDeviceTypePadding } from '../../../utils/device.utils'

type PageLayoutContainerProps = {
	$deviceType: DeviceType
}

export const PageLayoutContainer = styled.div<PageLayoutContainerProps>`
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
		getDeviceTypePadding(theme, $deviceType, 'page')};

	overflow-x: hidden;
`

export default PageLayoutContainer
