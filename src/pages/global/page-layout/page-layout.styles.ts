import styled from 'styled-components'

import { DeviceTypeStyledProp } from '../../../types/deviceType.types'
import { getDeviceTypePadding } from '../../../utils/deviceUtils'

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
		getDeviceTypePadding(theme, $deviceType, 'page')};
`

export default PageLayoutContainer
