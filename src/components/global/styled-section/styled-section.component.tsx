import styled from 'styled-components'

import { StyledSectionContainerProps } from './styled-section.types'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour, hexToRgba } from '../../../utils/colour.utils'
import { getContainerStyle } from '../../../utils/style.utils'

type Props = StyledSectionContainerProps

export const StyledSectionContainer = styled.div<Props>`
	width: ${({ theme }) => theme.layout.container.width};

	${({ theme }) =>
		getContainerStyle(
			theme,
			'neutral',
			'secondary',
			'filled',
			'rounded2',
			0.05,
		)}

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.container.padding.lg};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	div.container-row {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.component.gutter};

		div.item-row {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		h2.heading-2 {
			${({ theme }) => getTypography(theme, 'body')}

			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}

		p.body {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		span.connected-account-name {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 0.5rem;

			font-weight: bold;

			.logo {
				height: 1.5rem;
				width: 1.8rem;
			}
		}
	}

	hr {
		width: 100%;
		height: 0.0625rem;
		border: none;
		background-color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.05)};
	}
`
