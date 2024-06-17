import styled, { css } from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { PreOrderContainerProps } from './pre-order.types'
import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

type Props = PreOrderContainerProps

export const PreOrderContainer = styled(PageLayoutContainer)<Props>`
	position: relative;

	gap: 0;

	div#quant-logo-section {
		position: relative;
		overflow: hidden;

		width: ${({ theme }) => theme.layout.section.width};
		height: 100vh;
		min-height: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? '40rem' : '64rem'};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

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
				)}, ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.15,
				)}, ${hexToRgba(theme.colour.neutral.primary.active, 1)})`};

			z-index: 1;
		}

		& > * {
			z-index: 5;
		}

		div#quant-logo-section-contents-container {
			position: relative;

			width: ${({ theme }) => theme.layout.container.width};
			height: 50%;

			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			align-items: center;

			${({ $deviceType }) =>
				$deviceType === 'mobile'
					? css`
							margin-bottom: 1rem;
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
				gap: ${({ theme, $deviceType }) =>
					$deviceType === 'mobile'
						? theme.layout.container.gutter
						: theme.layout.section.gutter};
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
							0.25,
						)}, ${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.25,
						)},
            ${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.25,
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

			#down-icon {
				margin-top: ${({ theme }) => theme.layout.section.gutter};
				font-size: 2rem;
				opacity: 0.5;
			}

			div#quant-buttons-container {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				gap: ${({ theme }) => theme.layout.container.gutter};
			}
		}
	}
`
