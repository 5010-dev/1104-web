import styled, { css } from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { OurServiceItemContainerProps } from './our-service-item.types'
import { SectionContainer } from '../../global/section/section.styles'

type Props = OurServiceItemContainerProps

export const OurServiceItemContainer = styled(SectionContainer)<Props>`
	position: relative;

	max-width: ${({ theme }) => theme.layout.section.maxWidth};
	min-height: 20vh;

	justify-content: center;

	border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

	padding-top: ${({ theme }) => theme.layout.page.gutter};
	padding-bottom: ${({ theme }) => theme.layout.section.gutter};

	background-image: url(${({ $imageUrl }) => $imageUrl});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	/* ${({ theme }) => css`
		-webkit-filter: drop-shadow(
			0 0 1rem
				${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.15)}
		);
		filter: drop-shadow(
			0 0 1rem
				${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.15)}
		);
	`} */

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

		/* box-shadow: ${({ theme }) =>
			`${theme.shape.outlined.rounded1.boxShadow} ${hexToRgba(
				getColour(theme, 'accent', 'primary', 'active'),
				0.1,
			)}`}; */

		background: ${({ theme }) =>
			`linear-gradient(to bottom, ${hexToRgba(
				theme.colour.neutral.tertiary.active,
				0.75,
			)}, ${hexToRgba(theme.colour.neutral.tertiary.active, 0.9)}, ${hexToRgba(
				theme.colour.neutral.tertiary.active,
				1,
			)})`};

		z-index: 1;
	}

	& > * {
		z-index: 1;
	}

	div.our-service-item-contents-container {
		max-width: ${({ theme }) => theme.layout.container.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		div.our-service-item-title-container {
			display: flex;
			flex-direction: column;
			align-items: center;

			span.our-service-item-subheading {
				${({ theme }) => getTypography(theme, 'heading3')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			h3.our-service-item-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				font-weight: 900;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			div.our-service-item-features-container {
				display: flex;
				gap: 0.25rem;
				padding-top: ${({ theme }) => theme.layout.component.gutter};
			}
		}

		div.our-service-item-body-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.container.gutter};

			p.our-service-item-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
				text-align: left;
			}
		}

		div.our-service-item-buttons-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			gap: ${({ theme }) => theme.layout.component.gutter};

			padding-top: ${({ theme }) => theme.layout.container.gutter};
			padding-bottom: ${({ theme }) => theme.layout.component.gutter};

			.our-service-item-button {
				flex: 0 0 auto;
			}
		}
	}
`
