import styled from 'styled-components'

import { SectionContainer } from '../section/section.styles'
import { DeviceType } from '../../../store/deviceTypeStore'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'

type FooterContainerProps = {
	$deviceType: DeviceType
}

export const FooterContainer = styled(SectionContainer)<FooterContainerProps>`
	justify-content: center;
	align-items: center;

	padding: 0;

	${({ theme }) => getTypography(theme, 'caption')}
	color: ${({ theme }) => theme.colour.neutral.secondary.inactive};

	div#components-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		margin-top: ${({ theme }) => theme.layout.section.gutter};
		/* margin-bottom: ${({ theme }) => theme.layout.section.gutter}; */

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#disclaimer-container {
			width: ${({ theme }) => theme.layout.container.width};

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
	}
`
