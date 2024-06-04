import styled from 'styled-components'

import { hexToRgba, getColour } from '../../../utils/colour.utils'
import { getContainerStyle } from '../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'

import { ModalContainerProps } from './modal.types'

export const ModalContainer = styled.div<ModalContainerProps>`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	width: 100vw;
	height: 100vh;

	z-index: 100;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		border: none;
		box-sizing: border-box;

		pointer-events: none;

		background-color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.5)};

		filter: blur(1.5rem);
		backdrop-filter: blur(1.5rem);
		-webkit-backdrop-filter: blur(1.5rem);
	}

	div#contents-container {
		z-index: 999;

		width: ${({ theme }) => theme.layout.container.width};
		max-width: 28rem;
		max-height: 80vh;
		min-height: 8rem;

		${({ theme }) =>
			getContainerStyle(theme, 'neutral', 'secondary', 'filled', 'rounded2', 1)}

		box-shadow: ${({ theme }) =>
			`${theme.elevation.layer2} ${hexToRgba(
				getColour(theme, 'neutral', 'primary', 'active'),
				0.5,
			)}`};
	}
`
