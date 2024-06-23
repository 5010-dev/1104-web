import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { SectionContainer } from '../../global/section/section.styles'

export const ServiceItemBarContainer = styled(SectionContainer)`
	position: fixed;
	${({ $deviceType }) =>
		$deviceType === 'mobile'
			? css`
					bottom: 0;
			  `
			: css`
					top: 0;
			  `}

	width: ${({ theme }) => theme.layout.container.width};

	background-color: ${({ theme }) => hexToRgba('#000000', 0.75)};
	backdrop-filter: blur(1.5rem);
	-webkit-backdrop-filter: blur(1.5rem);

	padding: 0;

	z-index: 5;

	div#service-item-bar-contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.container.padding.sm} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'section',
			)}`};
		div#service-item-bar-left-column {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.component.gutter};

			img#service-item-bar-img {
				width: 3.5rem;

				border-radius: ${({ theme }) =>
					theme.shape.filled.rounded3.borderRadii};
			}

			div#service-item-bar-text-container {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;

				text-align: left;

				h2#service-item-bar-heading {
					${({ theme }) => getTypography(theme, 'subheading')}
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'active')};
				}

				span#service-item-bar-price {
					${({ theme }) => getTypography(theme, 'heading3')}
					color: ${({ theme }) =>
						getColour(theme, 'accent', 'primary', 'active')};
				}
			}
		}

		#service-item-bar-button {
			width: ${({ theme, $deviceType }) =>
				$deviceType === 'mobile' && theme.layout.component.width};

			padding-left: ${({ theme }) => theme.layout.container.padding.sm};
			padding-right: ${({ theme }) => theme.layout.container.padding.sm};

			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
				filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
			`}
		}
	}
`
