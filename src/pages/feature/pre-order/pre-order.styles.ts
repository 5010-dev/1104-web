import styled, { css } from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { PreOrderContainerProps } from './pre-order.types'
import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

type Props = PreOrderContainerProps

export const PreOrderContainer = styled(PageLayoutContainer)<Props>`
	position: relative;
	height: 100vh;
	min-height: ${({ $deviceType }) =>
		$deviceType === 'mobile' ? '40rem' : '58rem'};

	justify-content: center;

	background-image: url(${({ $imageUrl }) => $imageUrl});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background: ${({ theme }) =>
			`linear-gradient(to bottom, ${hexToRgba(
				theme.colour.neutral.primary.active,
				0,
			)}, ${hexToRgba(theme.colour.neutral.primary.active, 0.15)}, ${hexToRgba(
				theme.colour.neutral.primary.active,
				1,
			)})`};

		z-index: 1;
	}

	& > * {
		z-index: 5;
	}

	div#quant-logo-section {
		position: relative;

		width: ${({ theme }) => theme.layout.section.width};
		height: 50%;

		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: center;

		${({ $deviceType }) =>
			$deviceType === 'mobile'
				? css`
						margin-bottom: 2rem;
				  `
				: css`
						margin-top: 5rem;
				  `}

		#quant-logo {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -65%);

			height: ${({ $deviceType }) => {
				if ($deviceType === 'desktop') {
					return '52rem'
				} else if ($deviceType === 'tablet') {
					return '40rem'
				} else if ($deviceType === 'mobile') {
					return '30rem'
				}
			}};
		}

		div#quant-text-counter-container {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, 12.5%);

			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.section.gutter};
		}

		div#quant-text-container {
			width: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '85%' : '100%'};
			max-width: 25rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 0.5rem;

			padding: ${({ theme, $deviceType }) =>
				`0 ${getDeviceTypePadding(theme, $deviceType, 'section')}`};

			margin-top: ${({ theme, $deviceType }) =>
				$deviceType === 'mobile' && theme.layout.component.gutter};

			h1#quant-text-heading {
				width: 100%;
				font-family: 'Big Shoulders Display';
				font-weight: 400;
				font-size: 2rem;
				line-height: 100%;
				text-align: center;

				display: flex;
				justify-content: space-between;
			}

			span#quant-text-subheading {
				width: 100%;

				${({ theme }) => getTypography(theme, 'subheading')}
				font-size: ${({ $deviceType }) =>
					$deviceType === 'mobile' && '0.875rem'};
				line-height: 120%;
				letter-spacing: 0;
				text-align: center;

				display: flex;
				justify-content: space-between;

				background: ${({ theme }) =>
					`linear-gradient(to right, ${hexToRgba(
						getColour(theme, 'neutral', 'secondary', 'active'),
						0,
					)}, ${hexToRgba(
						getColour(theme, 'neutral', 'secondary', 'active'),
						0.2,
					)}, ${hexToRgba(
						getColour(theme, 'neutral', 'secondary', 'active'),
						0.25,
					)},
            ${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.2,
						)}, ${hexToRgba(
						getColour(theme, 'neutral', 'secondary', 'active'),
						0,
					)})`};

				padding: 0.25rem 0;
			}

			span.quant-text-letter {
				${({ theme }) => css`
					-webkit-filter: drop-shadow(
						0 0 0.1rem
							${hexToRgba(
								getColour(theme, 'neutral', 'primary', 'active'),
								0.5,
							)}
					);
					filter: drop-shadow(
						0 0 0.1rem
							${hexToRgba(
								getColour(theme, 'neutral', 'primary', 'active'),
								0.5,
							)}
					);
				`}
			}
		}

		div#quant-counter-container {
			width: 80%;
			max-width: ${({ theme, $deviceType }) =>
				$deviceType === 'desktop' && theme.layout.section.maxWidth};

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: ${({ theme, $deviceType }) =>
				$deviceType === 'mobile'
					? theme.layout.component.padding.sm
					: theme.layout.section.gutter};

			margin-top: ${({ theme }) => theme.layout.container.gutter};

			span.quant-counter {
				font-family: 'Big Shoulders Display';
				font-weight: 900;
				font-size: ${({ $deviceType }) => {
					if ($deviceType === 'desktop') {
						return '10rem'
					} else if ($deviceType === 'tablet') {
						return '6rem'
					} else if ($deviceType === 'mobile') {
						return '3.5rem'
					}
				}};
				line-height: 100%;
				text-align: center;
			}

			span.quant-counter-separator {
				${({ theme }) => getTypography(theme, 'display')}
				font-size: ${({ $deviceType }) => $deviceType === 'mobile' && '2.5rem'};
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'tertiary', 'active')};
			}

			span.quant-counter-num::first-letter {
				letter-spacing: ${({ theme, $deviceType }) =>
					$deviceType === 'mobile' ? '0.25rem' : theme.layout.container.gutter};
			}
		}
	}
`
