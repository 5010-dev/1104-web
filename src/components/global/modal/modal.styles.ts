import styled, { css } from 'styled-components'

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

	${({ $backgroundPanel }) =>
		$backgroundPanel &&
		css`
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
		`}

	div#modal-contents-container {
		z-index: 999;

		width: ${({ theme }) => theme.layout.container.width};
		max-width: 28rem;
		max-height: 80vh;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		${({ theme }) =>
			getContainerStyle(theme, 'neutral', 'secondary', 'filled', 'rounded2', 1)}

		padding: ${({ theme }) => `${theme.layout.container.padding.sm}`};

		box-shadow: ${({ theme }) =>
			`${theme.elevation.layer2} ${hexToRgba(
				getColour(theme, 'neutral', 'primary', 'active'),
				0.5,
			)}`};

		div#modal-top-bar {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: flex-end;

			padding-bottom: 0.5rem;

			button#modal-close-button {
				all: unset;
				user-select: none;
				cursor: pointer;

				width: 2rem;
				height: 2rem;

				display: flex;
				justify-content: center;
				align-items: center;

				font-size: 1.25rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'primary', 'active')};
			}
		}

		div#modal-body {
			height: 100%;
			overflow-y: auto;
			overflow-x: hidden;

			color: ${({ theme }) => getColour(theme, 'neutral', 'primary', 'active')};
			text-align: left;
		}

		div#modal-bottom-bar {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			align-items: center;

			padding-top: 1rem;

			#button {
				min-width: 50%;
			}
		}
	}
`
