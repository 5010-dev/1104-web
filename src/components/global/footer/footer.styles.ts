import styled from 'styled-components'

import { DeviceTypeStyledProp } from '../../../types/deviceType.types'
import { getDeviceTypePadding } from '../../../utils/deviceUtils'
import { getTypography } from '../../../utils/typoUtils'

export const FooterContainer = styled.div<DeviceTypeStyledProp>`
	width: ${({ theme }) => theme.layout.page.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* gap: 1rem; */

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'page')};

	${({ theme }) => getTypography(theme, 'caption')}
	color: ${({ theme }) => theme.colour.neutral.secondary.inactive};

	div#disclaimer-container {
		width: ${({ theme }) => theme.layout.component.width};
		max-width: ${({ theme }) => theme.layout.page.maxWidth};

		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 1rem;

		div#copyright-text {
			display: flex;
			gap: 0.25rem;

			span {
				font-weight: bold;
			}
		}
	}
`
