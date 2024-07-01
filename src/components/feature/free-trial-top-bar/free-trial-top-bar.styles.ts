import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { FreeTrialTopBarContainerProps } from './free-trial-top-bar.types'

export const FreeTrialTopBarContainer = styled.nav<FreeTrialTopBarContainerProps>`
	position: sticky;
	top: 0;

	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	z-index: 10;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		`${theme.layout.container.gutter} ${getDeviceTypePadding(
			theme,
			$deviceType,
			'section',
		)}`};

	background-color: ${({ theme }) =>
		hexToRgba(theme.colour.neutral.primary.active, 0)};
	-webkit-backdrop-filter: blur(1rem);
	backdrop-filter: blur(1rem);

	#logo {
		width: 4rem;
		height: auto;

		cursor: pointer;
	}

	button#close-icon {
		all: unset;
		cursor: pointer;

		position: relative;

		display: flex;
		justify-content: flex-end;
		align-items: center;

		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		font-size: 1.5rem;
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};

		&::before {
			content: '';
			position: absolute;
			top: -1rem;
			right: -1rem;
			bottom: -1rem;
			left: -1rem;
		}
	}
`
