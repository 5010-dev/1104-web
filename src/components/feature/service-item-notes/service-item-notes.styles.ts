import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { SectionContainer } from '../../global/section/section.styles'

export const ServiceItemNotesContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	gap: ${({ theme }) => theme.layout.container.gutter};

	h3.service-item-accordion-heading {
		${({ theme }) => getTypography(theme, 'heading3')}
		font-size: ${({ $deviceType }) => $deviceType === 'mobile' && '1rem'};
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	.service-item-notes-card ul.service-item-notes-ul {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.component.gutter};

		padding-left: 1.25rem;

		li.service-item-notes-li {
			${({ theme }) => getTypography(theme, 'body')}
			font-size: 0.875rem;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
			text-align: left;
		}
	}
`
