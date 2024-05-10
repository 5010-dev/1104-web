import styled from 'styled-components'
import { SectionContainer } from '../../global/section/section.styles'

import { getDeviceTypePadding } from '../../../utils/device.utils'

export const ReviewContainer = styled(SectionContainer)`
	overflow-x: hidden;
	align-items: flex-start;

	padding-left: 0;
	padding-right: 0;
	margin-top: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'container')};
	margin-bottom: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	&::-webkit-scrollbar {
		display: none;
	}
	scrollbar-width: none;

	background-color: #ffffff;

	div#reviews-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};
	}

	div#button-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		justify-content: center;
	}
`
