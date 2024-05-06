import styled from 'styled-components'

import { DeviceType } from '../../../store/deviceTypeStore'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'

type FooterContainerProps = {
	$deviceType: DeviceType
}

export const FooterContainer = styled.div<FooterContainerProps>`
	width: ${({ theme }) => theme.layout.page.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* gap: 1rem; */

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	${({ theme }) => getTypography(theme, 'caption')}
	color: ${({ theme }) => theme.colour.neutral.secondary.inactive};

	div#disclaimer-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

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
