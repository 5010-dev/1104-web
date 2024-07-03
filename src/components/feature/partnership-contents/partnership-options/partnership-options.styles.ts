import styled from 'styled-components'

import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { SectionContainer } from '../../../global/section/section.styles'

export const PartnershipOptionsContainer = styled(SectionContainer)`
	position: relative;

	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	flex-direction: row;
	flex-wrap: wrap;
	gap: ${({ theme }) => theme.layout.container.gutter};

	.partnership-option-container {
		width: 24rem;
		flex: 1 1 auto;

		gap: ${({ theme }) => theme.layout.container.gutter};

		text-align: left;

		h3.partnership-option-heading {
			${({ theme }) => getTypography(theme, 'heading2')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		p.partnership-option-body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
		}
	}
`
