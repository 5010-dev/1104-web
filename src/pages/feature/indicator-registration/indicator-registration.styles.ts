import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const IndicatorRegistrationContainer = styled(PageLayoutContainer)`
	justify-content: center;
	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	div#contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: 20rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};
	}
`
