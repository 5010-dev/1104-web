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
				theme.colour.neutral.tertiary.active,
				0,
			)}, ${hexToRgba(theme.colour.neutral.tertiary.active, 0.15)}, ${hexToRgba(
				theme.colour.neutral.tertiary.active,
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

		#quant-logo {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			${({ $deviceType }) =>
				$deviceType === 'mobile'
					? css`
							width: 130%;
							height: 100%;
					  `
					: css`
							height: 80%;
							width: 100%;
					  `}
		}

		div#quant-text-container {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);

			width: ${({ theme }) => theme.layout.container.width};
			max-width: 25rem;
			height: 50%;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.component.gutter};

			padding: ${({ theme, $deviceType }) =>
				`0 ${getDeviceTypePadding(theme, $deviceType, 'section')}`};

			h1#quant-text-heading {
				width: 100%;
				font-family: 'Big Shoulders Display';
				font-weight: 400;
				font-size: 2rem;
				text-align: center;

				display: flex;
				justify-content: space-between;
			}

			span#quant-text-subheading {
				width: 100%;

				${({ theme }) => getTypography(theme, 'heading2')}
				font-size: 1.125rem;
				letter-spacing: 0;
				text-align: center;

				display: flex;
				justify-content: space-between;
			}
		}
	}
`
