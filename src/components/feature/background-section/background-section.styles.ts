import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { SectionContainer } from '../../global/section/section.styles'

import { BackgroundSectionContainerProps } from './background-section.types'

type Props = BackgroundSectionContainerProps

export const BackgroundSectionContainer = styled(SectionContainer)<Props>`
	width: ${({ theme }) => theme.layout.page.width};

	justify-content: flex-start;
	align-items: center;

	padding: 0;
	margin: ${({ theme }) => `${theme.layout.section.gutter} 0`};

	div#contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.page.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		span.caption {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
			font-weight: bold;
		}

		h2.heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		h3.subheading {
			${({ theme }) => getTypography(theme, 'heading2')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		p.body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		div.title-text {
			display: flex;
			flex-direction: column;
			gap: ${({ theme }) => theme.layout.container.gutter};
		}

		div#title-text-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.section.gutter};

			text-align: left;
		}

		div#image-text-container {
			position: relative;

			width: ${({ theme }) => theme.layout.container.width};
			height: 50vh;
			min-height: 36rem;

			display: flex;
			flex-direction: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? 'column' : 'row'};
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.section.gutter};

			padding: ${({ theme, $deviceType }) =>
				`${getDeviceTypePadding(theme, $deviceType, 'section')} 0`};
			margin: ${({ theme }) => `${theme.layout.page.gutter} 0`};

			div.paragraph-text {
				position: relative;

				/* flex: 1 1 auto; */
				width: 100%;

				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: ${({ theme }) => theme.layout.container.gutter};

				z-index: 2;

				& > h3 {
					width: 80%;
				}
			}

			div#first-paragraph-container {
				margin-bottom: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '10%' : '25%'};
				align-items: flex-end;
				text-align: right !important;
			}

			div#second-paragraph-container {
				margin-top: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '10%' : '25%'};
				align-items: flex-start;
				text-align: left !important;
			}

			div#paragraph-image {
				position: absolute;

				width: 100%;
				max-width: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '16rem' : '20rem'};
				height: 100%;

				background-image: url(${(props) => props.$ParagraphImage});
				background-position: center;
				background-size: cover;
				background-repeat: no-repeat;
				background-attachment: ${({ $isPointerCoarseAndSafari }) =>
					$isPointerCoarseAndSafari ? 'scroll' : 'fixed'};

				/* opacity: 0.5; */

				/* filter: blur(1rem);
				backdrop-filter: blur(1rem);
				-webkit-backdrop-filter: blur(1rem); */

				border-radius: ${({ theme }) =>
					theme.shape.filled.rounding.borderRadii};

				&::before {
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;

					border: none;
					box-sizing: border-box;

					background-color: ${({ theme }) =>
						hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.5)};

					filter: blur(1.5rem);
					backdrop-filter: blur(1.5rem);
					-webkit-backdrop-filter: blur(1.5rem);

					border-radius: ${({ theme }) =>
						theme.shape.filled.rounding.borderRadii};

					z-index: 1;
				}
			}
		}
	}
`
