import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.styles'
import { getColour } from '../../../utils/colour.utils'

export const CheckoutInputContainer = styled(StyledSectionContainer)`
	div.checkout-input-container {
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
		}

		div.checkout-inputs {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: ${({ $deviceType }) =>
				$deviceType === 'mobile' ? 'column' : 'row'};
			justify-content: flex-start;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.component.gutter};

			.checkout-input {
				width: ${({ theme }) => theme.layout.component.width};
			}
		}

		span.caption {
			${({ theme }) => getTypography(theme, 'body')}
			font-size: 0.875rem;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
			text-align: left;

			.caption-chip {
				display: inline-block;
				margin-right: 0.25rem;
			}
		}
	}
`
