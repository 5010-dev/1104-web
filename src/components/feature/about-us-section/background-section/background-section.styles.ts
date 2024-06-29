import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { AboutUsSectionContainer as Container } from '../about-us-section.styles'

import { BackgroundSectionContainerProps } from './background-section.types'
import { getContainerStyle } from '../../../../utils/style.utils'

type Props = BackgroundSectionContainerProps

export const BackgroundSectionContainer = styled(Container)<Props>`
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
		margin-bottom: ${({ theme }) => theme.layout.section.gutter};

		div.paragraph-text {
			position: relative;

			width: 100%;

			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.container.gutter};

			z-index: 2;

			& > h3 {
				width: 80%;
			}

			${({ $deviceType }) =>
				$deviceType === 'mobile' &&
				css`
					& > p {
						width: 80%;
					}
				`}
		}

		div#first-paragraph-container {
			margin-bottom: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '5%' : '25%'};
			align-items: flex-end;
			text-align: right !important;
		}

		div#second-paragraph-container {
			margin-top: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '5%' : '25%'};
			align-items: flex-start;
			text-align: left !important;
		}

		div#paragraph-image {
			position: absolute;

			width: 100%;
			max-width: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '16rem' : '20rem'};
			height: 100%;

			background-image: url(${(props) => props.$paragraphImage});
			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			background-attachment: ${({ $isPointerCoarseAndSafari }) =>
				$isPointerCoarseAndSafari ? 'scroll' : 'fixed'};

			border-radius: ${({ theme }) => theme.shape.filled.rounding.borderRadii};

			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;

				border: none;
				border-radius: ${({ theme }) =>
					theme.shape.filled.rounding.borderRadii};
				box-sizing: border-box;

				background-color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'primary', 'active'), 0.5)};

				filter: blur(1.5rem);
				backdrop-filter: blur(1.5rem);
				-webkit-backdrop-filter: blur(1.5rem);

				z-index: 1;
			}
		}
	}

	div#third-paragraph-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		div#vertical-line {
			width: 0.125rem;
			height: 6rem;
			background-color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}

		div#quote-text-container {
			display: flex;
			flex-direction: column;
		}
	}

	div#fourth-paragraph-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.gutter} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'section',
			)}`};

		${({ theme }) =>
			getContainerStyle(
				theme,
				'neutral',
				'secondary',
				'filled',
				'rounded2',
				0.05,
			)}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};

		div#last-heading-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.component.gutter};
		}
	}
`
