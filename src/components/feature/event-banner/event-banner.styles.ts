import styled, { css } from 'styled-components'

import { getContainerStyle } from '../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { EventBannerContainerProps } from './event-banner.types'

import backgroundImage from '../../../assets/img/banner-background-img.webp'

export const EventBannerContainer = styled.div<EventBannerContainerProps>`
	width: ${({ theme }) => theme.layout.container.width};

	${({ $variants, theme, $deviceType }) =>
		$variants === 'modal' &&
		css`
			/* position: ${$deviceType === 'desktop' ? 'absolute' : 'fixed'}; */
			position: fixed;
			bottom: 0.5rem;
			left: 50%;
			transform: translateX(-50%);
			z-index: 5;
			padding: ${getDeviceTypePadding(theme, $deviceType, 'section')};

			max-width: ${theme.layout.section.maxWidth};
		`}

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	div#event-banner-contents-container {
		position: relative;

		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? 'column' : 'row'};
		justify-content: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? 'center' : 'space-evenly'};

		align-items: center;
		gap: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		${({ theme }) =>
			getContainerStyle(theme, 'accent', 'primary', 'filled', 'rounded2', 0)}
		padding: ${({ theme, $deviceType }) =>
			`${getDeviceTypePadding(
				theme,
				$deviceType,
				'container',
			)} ${getDeviceTypePadding(theme, $deviceType, 'section')}`};

		background-image: url(${backgroundImage});
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 0.5rem 1rem
					${hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.75)}
			);
			filter: drop-shadow(
				0 0.5rem 1rem
					${hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.75)}
			);
		`}

		button.event-banner-close-button {
			all: unset;
			cursor: pointer;
			user-select: none;

			position: absolute;
			top: 0;
			right: 0.5rem;

			z-index: 5;

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: 0.25rem;
			padding: 0.5rem;

			box-sizing: border-box;

			align-self: flex-end;

			.event-banner-close-button-text {
				${({ theme }) => getTypography(theme, 'body')}
				font-size: 0.875rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}
		}

		div#event-banner-text-container {
			/* width: ${({ theme }) => theme.layout.container.width}; */

			display: flex;
			flex-direction: ${({ $deviceType }) =>
				$deviceType !== 'desktop' ? 'column' : 'row'};
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};
			column-gap: ${({ theme }) => theme.layout.section.gutter};
			flex-wrap: wrap;

			div#event-banner-title-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 0.25rem;
				flex-wrap: wrap;

				h3.event-banner-heading {
					/* width: 80%; */
					${({ theme }) => getTypography(theme, 'heading2')}
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'active')};
				}

				span.event-banner-period {
					${({ theme }) => getTypography(theme, 'caption')}
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'active')};
				}
			}

			p.event-banner-caption {
				flex: ${({ $deviceType }) => $deviceType === 'desktop' && '1 1 14rem'};

				/* width: ${({ $deviceType }) => $deviceType !== 'desktop' && '80%'}; */
				${({ theme }) => getTypography(theme, 'caption')}
				font-size: 0.875rem;
				font-weight: normal;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};

				/* margin-top: ${({ theme }) => theme.layout.container.gutter}; */
			}
		}

		#event-banner-button {
			flex: 0 0 auto;
			/* margin-top: ${({ theme }) => theme.layout.container.gutter}; */
		}
	}
`
