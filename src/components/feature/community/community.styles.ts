import styled, { css } from 'styled-components'
import { SectionContainer } from '../../global/section/section.styles'

import { CommunityContainerProps } from './community.types'

import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

type Props = CommunityContainerProps

export const CommunityContainer = styled(SectionContainer)<Props>`
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	padding-top: 0;
	padding-bottom: 0;

	div#contents-container {
		position: relative;

		width: ${({ theme }) => theme.layout.container.width};
		min-height: ${({ theme, $deviceType }) => {
			switch ($deviceType) {
				case 'desktop':
					return '19rem'
				case 'tablet':
					return '21rem'
				case 'mobile':
					return '24rem'
			}
		}};

		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.padding.default} ${theme.layout.section.padding.sm} `};

		margin-bottom: ${({ theme, $deviceType }) => theme.layout.section.gutter};

		background-image: url(${({ $imageUrl }) => $imageUrl});
		background-size: cover;
		background-position: right 0 top 50%;
		background-repeat: no-repeat;

		border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.25);
			border-radius: ${({ theme }) => theme.shape.filled.rounded1.borderRadii};

			z-index: 1;
		}

		div#text-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			z-index: 2;

			& > * {
				${({ theme }) => css`
					-webkit-filter: drop-shadow(
						0 0 0.25rem
							${hexToRgba(
								getColour(theme, 'accent', 'primary', 'active'),
								0.75,
							)}
					);
					filter: drop-shadow(
						0 0 0.25rem
							${hexToRgba(
								getColour(theme, 'accent', 'primary', 'active'),
								0.75,
							)}
					);
				`}
			}

			span#caption {
				${({ theme }) => getTypography(theme, 'caption')}
				font-weight: bold;
				color: ${({ theme }) =>
					getColour(theme, 'accent', 'primary', 'active')};
			}

			h1#commnity-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			p#body {
				width: 80%;
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}
		}

		#community-button {
			z-index: 2;

			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.5)}
				);
				filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.5)}
				);
			`}

			& > * {
				${({ theme }) => css`
					-webkit-filter: drop-shadow(
						0 0 0.125rem
							${hexToRgba(
								getColour(theme, 'neutral', 'secondary', 'active'),
								0.5,
							)}
					);
					filter: drop-shadow(
						0 0 0.125rem
							${hexToRgba(
								getColour(theme, 'neutral', 'secondary', 'active'),
								0.5,
							)}
					);
				`}
			}
		}
	}
`
