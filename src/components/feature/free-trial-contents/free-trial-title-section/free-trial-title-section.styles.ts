import styled, { css } from 'styled-components'

import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { SectionContainer } from '../../../global/section/section.styles'

export const FreeTrialTitleSectionContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.section.maxWidth};
	overflow-y: visible;

	justify-content: center;

	/* padding-top: 5rem;
	padding-bottom: 5rem; */

	div#free-trial-title-section-heading-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;

		h1.free-trial-title-section-heading {
			${({ theme }) => getTypography(theme, 'quote')}
			font-size: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? '2.25rem' : '4rem'};
			line-height: 120%;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};

			background-color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.1)};

			padding: 0 0.25rem;

			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 2rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
				filter: drop-shadow(
					0 0 2rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
			`}
		}
	}

	p#free-trial-title-section-subheading {
		width: ${({ $deviceType }) => $deviceType !== 'mobile' && '24rem'};

		${({ theme }) => getTypography(theme, 'subheading')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	img#free-trial-title-section-mockup-img {
		width: ${({ theme }) => theme.layout.component.width};
		max-width: 32rem;

		${({ theme }) => css`
			-webkit-filter: drop-shadow(
				0 1rem 4rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
			);
			filter: drop-shadow(
				0 1rem 4rem
					${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
			);
		`}
	}
`
