import styled, { css } from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { PreOrderContainerProps } from './pre-order.types'
import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

type Props = PreOrderContainerProps

export const PreOrderContainer = styled(PageLayoutContainer)<Props>`
	position: relative;

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
		height: 100vh;
		/* max-width: ${({ theme }) => theme.layout.section.maxWidth}; */

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		div#quant-logo-container {
			position: relative;

			width: 100%;
			height: 100%;
			max-height: ${({ $deviceType }) => {
				if ($deviceType === 'desktop') {
					return '50rem'
				} else if ($deviceType === 'tablet') {
					return '40rem'
				} else if ($deviceType === 'mobile') {
					return '30rem'
				}
			}};
			min-height: 24rem;

			#quant-logo {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				height: 100%;
			}

			div#quant-text-container {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);

				width: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '85%' : '100%'};
				max-width: 25rem;
				height: 50%;

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

					${({ theme }) => getTypography(theme, 'heading2')}
					font-size: 1.125rem;
					line-height: 100%;
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
			}
		}
	}
`
