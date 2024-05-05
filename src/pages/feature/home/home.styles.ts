import styled from 'styled-components'
import { getTypography } from '../../../utils/typoUtils'
import { getColour } from '../../../utils/colourUtils'
import { HomeContainerProps } from './home.types'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const HomeContainer = styled(PageLayoutContainer)<HomeContainerProps>`
	position: relative;

	min-height: ${({ theme }) => theme.layout.component.minHeight};

	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;

	padding-bottom: 0;
	padding-top: 8rem;

	background-image: url(${(props) => props.$imageUrl});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.15);

		z-index: 1;
	}

	div#text-container {
		max-width: ${({ theme }) => theme.layout.section.maxWidth};
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		z-index: 2;

		h1#display {
			${({ theme }) => getTypography(theme, 'display')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		h3#subheading {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	img#mockup-image {
		max-width: 100vw;
		min-width: ${({ theme }) => theme.layout.page.minWidth};
		height: 50vh;
		object-fit: cover;
		object-position: bottom;

		z-index: 2;
	}
`
