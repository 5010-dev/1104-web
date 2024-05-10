import styled, { css } from 'styled-components'
import { SectionContainer } from '../../global/section/section.styles'

import { HeroContainerProps } from './hero.types'

import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

export const HeroContainer = styled(SectionContainer)<HeroContainerProps>`
	position: relative;

	min-height: ${({ theme }) => theme.layout.section.minHeight};

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

	background-attachment: ${({ $isPointerCoarseAndSafari }) =>
		$isPointerCoarseAndSafari ? 'scroll' : 'fixed'};

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
		max-width: ${({ theme }) => theme.layout.container.maxWidth};
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		z-index: 2;

		& > * {
			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 0.25rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.5,
						)}
				);
				filter: drop-shadow(
					0 0 0.25rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.5,
						)}
				);
			`}
		}

		h1#display {
			${({ theme }) => getTypography(theme, 'display')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		h2#subheading {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		#get-sample-button {
			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 1rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.8,
						)}
				);
				filter: drop-shadow(
					0 0 1rem
						${hexToRgba(
							getColour(theme, 'neutral', 'secondary', 'active'),
							0.8,
						)}
				);
			`}
		}

		div#buttons-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};
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
