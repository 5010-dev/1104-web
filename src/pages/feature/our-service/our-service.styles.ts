import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const OurServiceContainer = styled(PageLayoutContainer)`
	position: relative;
	/* gap: 0; */

	#our-service-hero {
		&::before {
			background: ${({ theme }) =>
				`linear-gradient(to bottom, ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.8,
				)},  ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.9,
				)}, ${hexToRgba(theme.colour.neutral.primary.active, 1)})`} !important;
		}

		div#hero-contents-container {
			div#hero-text-container {
				max-width: ${({ theme }) => theme.layout.section.maxWidth};

				span#subheading {
					width: 80%;
				}
			}

			hr#our-service-hero-horizontal-line {
				width: ${({ theme }) => theme.layout.component.width};
				height: 0.125rem;
				border: none;

				background: ${({ theme }) =>
					`linear-gradient(to right, ${hexToRgba(
						theme.colour.neutral.secondary.active,
						0,
					)}, ${hexToRgba(
						theme.colour.neutral.secondary.active,
						0.5,
					)}, ${hexToRgba(theme.colour.neutral.secondary.active, 0)})`};

				margin: ${({ theme, $deviceType }) =>
					$deviceType === 'mobile'
						? `${theme.layout.section.gutter} 0`
						: `${theme.layout.page.gutter} 0`};
			}

			div#our-service-hero-body-container {
				width: ${({ theme }) => theme.layout.container.width};
				max-width: ${({ theme }) => theme.layout.container.maxWidth};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: ${({ theme }) => theme.layout.container.gutter};

				p.our-service-hero-body {
					${({ theme }) => getTypography(theme, 'body')}
					color: ${({ theme }) =>
						hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.75,
						)};
					text-align: left;
				}
			}
		}
	}

	div#our-service-contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.page.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div.our-service-contents-row {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.section.gutter};

			margin-bottom: ${({ theme }) => theme.layout.page.gutter};
		}
	}
`
