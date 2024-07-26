import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { WhitePaperBannerContainerProps } from './white-paper-banner.types'

type Props = WhitePaperBannerContainerProps

export const WhitePaperBannerContainer = styled.div<Props>`
	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	padding: ${({ theme, $deviceType }) => `
		0 ${getDeviceTypePadding(theme, $deviceType, 'section')}`};

	div#white-paper-banner-contents-container {
		position: relative;

		width: ${({ theme }) => theme.layout.container.width};
		min-height: ${({ theme, $deviceType }) => {
			switch ($deviceType) {
				case 'desktop':
					return '19rem'
				case 'tablet':
					return '21rem'
				// case 'mobile':
				// 	return '24rem'
			}
		}};

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 3rem;

		padding: ${({ theme }) =>
			`${theme.layout.section.padding.default} ${theme.layout.section.padding.sm} `};

		background-image: url(${({ $backgroundImg }) => $backgroundImg});
		background-position: center;
		/* background-size: cover; */
		background-repeat: no-repeat;

		border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

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
			border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};
			box-sizing: border-box;

			background-color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.75)};

			/* filter: blur(0.5rem);
			backdrop-filter: blur(0.5rem);
			-webkit-backdrop-filter: blur(0.5rem); */

			z-index: 1;
		}

		/* ${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 0 2rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.15)}
			);
			filter: drop-shadow(
				0 0 2rem
					${hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.15)}
			);
		`} */

		div#white-paper-banner-text-container {
			/* width: ${({ theme }) => theme.layout.container.width}; */

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			span#white-paper-banner-caption {
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'accent', 'primary', 'active')};
			}

			h3#white-paper-banner-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			p#white-paper-banner-body {
				width: 80%;
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}
		}
	}
`
