import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.styles'
import { getColour } from '../../../utils/colour.utils'

export const CheckoutOptionContainer = styled(StyledSectionContainer)`
	div.checkout-option-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.component.gutter};

		text-align: left;

		h3.heading-3 {
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};

			.heading-3-chip {
				display: inline-block;
				vertical-align: middle;
				margin-left: 0.5rem;
			}
		}

		ul#checkout-options-list {
			padding-left: 1.25rem;

			li.body-sm {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
				font-size: 0.875rem;

				span {
					font-weight: bold;
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'active')};
					text-decoration: underline;
					white-space: nowrap;
					cursor: pointer;
				}
			}
		}
	}
`
