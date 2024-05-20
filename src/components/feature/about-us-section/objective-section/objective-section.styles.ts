import styled, { css } from 'styled-components'

import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { AboutUsSectionContainer as Container } from '../about-us-section.styles'

import { ObjectiveSectionContainerProps } from './objective-section.types'
import { getDeviceTypePadding } from '../../../../utils/device.utils'

type Props = ObjectiveSectionContainerProps

export const ObjectiveSectionContainer = styled(Container)<Props>`
	div#display-text-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		/* gap: ${({ theme }) => theme.layout.container.gutter}; */

		margin-top: ${({ theme }) => theme.layout.section.gutter};

		background-image: url(${({ $displayImage }) => $displayImage});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-attachment: ${({ $isPointerCoarseAndSafari }) =>
			$isPointerCoarseAndSafari ? 'scroll' : 'fixed'};

		text-align: left;

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

		& > h2.display {
			${({ theme }) => getTypography(theme, 'display')}
			font-size: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '3rem' : '6rem'};
		}
	}

	div#first-paragraph-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.component.gutter};

		text-align: left;

		& > p {
			width: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '100%' : '80%'};
		}
	}

	div#vertical-line {
		width: 0.125rem;
		height: 8rem;
		background-color: ${({ theme }) =>
			getColour(theme, 'neutral', 'secondary', 'inactive')};

		/* margin: ${({ theme }) => `${theme.layout.section.gutter} 0`}; */
		margin-top: ${({ theme }) => theme.layout.section.gutter};
	}

	div#second-paragraph-container {
		position: relative;

		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		background-image: url(${({ $ipoImage }) => $ipoImage});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		border-radius: ${({ theme }) => theme.shape.filled.rounded2.borderRadii};
		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.gutter} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'section',
			)}`};

		& > * {
			z-index: 2;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;

			border: none;
			border-radius: ${({ theme }) => theme.shape.filled.rounded2.borderRadii};
			box-sizing: border-box;

			background-color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.65)};

			z-index: 1;
		}

		div#last-heading-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.component.gutter};
		}

		span#closing-caption {
			margin-top: ${({ theme }) => theme.layout.container.gutter};

			${({ theme }) => getTypography(theme, 'caption')}
			font-weight: bold;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}
	}
`
