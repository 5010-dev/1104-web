import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { OurServiceItemContainerProps } from './our-service-item.types'
import { SectionContainer } from '../../global/section/section.styles'

type Props = OurServiceItemContainerProps

export const OurServiceItemContainer = styled(SectionContainer)<Props>`
	position: relative;

	max-width: ${({ theme }) => theme.layout.section.maxWidth};
	min-height: 40vh;

	justify-content: center;

	border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

	padding-top: ${({ theme }) => theme.layout.page.gutter};
	padding-bottom: ${({ theme }) => theme.layout.page.gutter};

	background-image: url(${({ $imageUrl }) => $imageUrl});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

		/* box-shadow: ${({ theme }) =>
			`${theme.shape.outlined.rounded1.boxShadow} ${getColour(
				theme,
				'neutral',
				'tertiary',
				'inactive',
			)}`}; */

		background-color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'tertiary', 'active'), 0.75)};

		z-index: 1;
	}

	& > * {
		z-index: 1;
	}

	div.our-service-item-contents-container {
		max-width: 40rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		div.our-service-item-text-container {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			h3.our-service-item-title {
				${({ theme }) => getTypography(theme, 'heading1')}
				font-weight: 900;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			p.our-service-item-description {
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}
		}

		div.our-service-item-buttons-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: ${({ theme }) => theme.layout.component.gutter};

			.our-service-item-button {
				flex: 0 0 auto;
			}
		}
	}
`
