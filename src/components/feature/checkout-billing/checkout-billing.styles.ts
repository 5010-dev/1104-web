import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.component'

export const CheckoutBillingContainer = styled(StyledSectionContainer)`
	div#billing-price-container {
		gap: 0;
		align-items: flex-end;

		h3#billing-price-text {
			${({ theme }) => getTypography(theme, 'heading2')}
			color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
		}

		span#billing-price-label {
			font-weight: bold;
		}

		span#caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}
	}
`
