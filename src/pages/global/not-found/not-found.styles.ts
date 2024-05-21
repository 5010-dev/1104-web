import styled, { css } from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'

import { NotFoundContainerProps } from './not-found.types'

import notFoundImage from '../../../assets/img/not-found-image.webp'
import backgroundImage from '../../../assets/img/not-found-background-image.webp'

export const NotFoundContainer = styled.div<NotFoundContainerProps>`
	position: relative;

	width: ${({ theme }) => theme.layout.page.width};
	min-width: ${({ theme }) => theme.layout.page.minWidth};
	height: ${({ theme }) => theme.layout.page.height};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.section.gutter};

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	background-image: url(${backgroundImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	-webkit-filter: grayscale(100%);
	-moz-filter: grayscale(100%);
	-ms-filter: grayscale(100%);
	-o-filter: grayscale(100%);
	filter: grayscale(100%);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		border: none;
		box-sizing: border-box;

		background-color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.5)};

		z-index: 1;
	}

	& > * {
		z-index: 2;
	}

	div#title-text-container {
		position: relative;

		div#display-text-container {
			background-image: url(${notFoundImage});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;

			${({ $deviceType }) =>
				$deviceType === 'mobile'
					? css`
							filter: blur(0.25rem);
							backdrop-filter: blur(0.25rem);
							-webkit-backdrop-filter: blur(0.25rem);
					  `
					: css`
							filter: blur(0.5rem);
							backdrop-filter: blur(0.5rem);
							-webkit-backdrop-filter: blur(0.5rem);
					  `}

			h1#display {
				${({ theme }) => getTypography(theme, 'display')}
				font-size: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '9rem' : '18rem'};
			}
		}

		h3#heading3 {
			position: absolute;
			bottom: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '-0.5rem' : '1rem'};

			width: 100%;

			${({ theme }) => getTypography(theme, 'heading1')}
			font-size: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '2rem' : '3rem'};
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};

			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 0.5rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.5,
						)}
				);
				filter: drop-shadow(
					0 0 0.5rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.5,
						)}
				);
			`}
		}
	}

	div#button-text-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		p#body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};

			margin-bottom: 0.5rem;
		}
	}
`
