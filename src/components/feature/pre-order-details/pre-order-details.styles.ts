import styled, { css, createGlobalStyle } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../../pages/global/page-layout/page-layout.styles'

const globalStyled = { createGlobalStyle }

export const PreOrderDetailsContainer = styled(PageLayoutContainer)`
	position: relative;

	gap: 0;

	div#pre-order-details-contents-container {
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		width: ${({ theme }) => theme.layout.container.width};
		max-width: ${({ theme }) => theme.layout.container.maxWidth};

		padding-top: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#pre-order-details-title-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: space-between;
			align-items: center;

			span.title-span {
				font-family: 'Big Shoulders Display';
				font-size: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '0.875rem' : '1rem'};
				font-weight: 400;
				width: 100%;

				display: flex;
				justify-content: center;
				align-items: center;
				gap: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '0.25rem' : '0.5rem'};
			}

			span#left-title-span {
				justify-content: flex-end;
				padding-right: 1rem;
			}

			span#right-title-span {
				justify-content: flex-start;
				padding-left: 1rem;
			}

			#quant-logo {
				flex: 0 0 auto;
				width: auto;
				height: 4rem;
				margin: 1rem 0;
			}
		}

		div#pre-order-details-img-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			img.quant-details-img {
				width: ${({ theme }) => theme.layout.component.width};
			}
		}

		div#pre-order-details-bottom-bar {
			position: fixed;
			bottom: 0;

			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: center;
			align-items: center;

			padding: ${({ theme, $deviceType }) =>
				getDeviceTypePadding(theme, $deviceType, 'container')};
			padding-top: ${({ theme }) => theme.layout.component.padding.default};

			/* background: linear-gradient(
				to bottom,
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0.3),
				rgba(0, 0, 0, 1)
			); */

			background-color: ${({ theme }) =>
				hexToRgba(theme.colour.neutral.primary.active, 0)};
			-webkit-backdrop-filter: blur(1rem);
			backdrop-filter: blur(1rem);

			z-index: 10;

			#pre-order-to-register-button {
				${({ theme }) => css`
					-webkit-filter: drop-shadow(
						0 0 1rem
							${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 1)}
					);
					filter: drop-shadow(
						0 0 1rem
							${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 1)}
					);
				`}
			}
		}
	}
`

export const PreOrderDetialsGlobalStyle = globalStyled.createGlobalStyle`
	body {
		background-color: #000;
	}
`
