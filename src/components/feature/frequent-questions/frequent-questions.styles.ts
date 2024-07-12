import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { SectionContainer } from '../../global/section/section.styles'

export const FrequentQuestionsContainer = styled(SectionContainer)`
	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	gap: ${({ theme }) => theme.layout.section.gutter};

	margin-bottom: ${({ theme }) => theme.layout.section.gutter};

	div#section-heading-container {
		width: ${({ theme }) => theme.layout.container.width};

		text-align: center;

		span#section-category-text {
			${({ theme }) => getTypography(theme, 'body')}
			font-weight: bold;
			color: ${({ theme }) => theme.colour.accent.primary.active};
		}

		h1#section-heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) => theme.colour.neutral.secondary.active};
		}
	}

	div#questions-tabs-container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		& > .questions-tab {
			gap: 0.4rem;

			span {
				font-weight: 600;
				font-size: 0.875rem;
			}
		}
	}

	div#questions-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		#quetions-disclaimer {
			${({ theme }) => getTypography(theme, 'caption')}
			font-size: 0.875rem;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
			text-align: left;
		}
	}
`
