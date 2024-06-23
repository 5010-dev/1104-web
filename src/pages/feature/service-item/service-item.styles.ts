import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const ServiceItemContainer = styled(PageLayoutContainer)`
	position: relative;

	div#service-item-contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};
		padding-top: 6rem;
	}
`
