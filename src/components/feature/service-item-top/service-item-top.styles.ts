import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { SectionContainer } from '../../global/section/section.styles'

export const ServiceItemTopContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	gap: ${({ theme }) => theme.layout.section.gutter};

	${({ theme, $deviceType }) =>
		$deviceType !== 'mobile'
			? css`
					flex-direction: row;
					text-align: left;
					margin-top: 5rem;
			  `
			: css`
					padding: 0;
			  `}

	justify-content: flex-start;
	align-items: flex-start;

	img#service-item-img {
		${({ theme, $deviceType }) =>
			$deviceType !== 'mobile'
				? css`
						width: 50%;
						border-radius: ${theme.shape.filled.rounded2.borderRadii};
				  `
				: css`
						width: ${theme.layout.component.width};
						border-radius: none;
				  `}
	}

	div#service-item-title-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		gap: ${({ theme }) => theme.layout.container.gutter};

		${({ theme, $deviceType }) =>
			$deviceType !== 'mobile'
				? css`
						align-items: flex-start;
						padding: ${getDeviceTypePadding(theme, $deviceType, 'section')} 0;
				  `
				: css`
						align-items: center;
						padding: 0 ${getDeviceTypePadding(theme, $deviceType, 'section')};
				  `}

		div#service-item-heading-container {
			display: flex;
			flex-direction: column;
			align-items: ${({ $deviceType }) =>
				$deviceType !== 'mobile' ? 'flex-start' : 'center'};

			h1#service-item-name {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			span#service-item-subheading {
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}
		}

		div#service-item-price-container {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			column-gap: ${({ theme }) => theme.layout.container.gutter};
			flex-wrap: wrap;

			span#service-item-price {
				flex: 0 0 auto;
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'accent', 'primary', 'active')};
			}

			span#service-item-price-caption {
				flex: 0 0 auto;
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'accent', 'primary', 'active')};
			}
		}

		hr.service-item-horizontal-line {
			width: ${({ theme }) => theme.layout.component.width};
			height: 0.0625rem;
			border: none;
			background-color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}

		.service-item-card {
			align-items: ${({ $deviceType }) => $deviceType === 'mobile' && 'center'};
		}

		ul.service-item-ul {
			text-align: left;
			padding-left: 1.25rem;

			li.service-item-li {
				${({ theme }) => getTypography(theme, 'body')}
				font-size: 0.875rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}
		}

		#service-item-purchase-button {
			align-self: center;
			width: 100%;

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
