import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.component'

export const CheckoutBillingContainer = styled(StyledSectionContainer)`
	div.item-row {
		h3#billing-price-text {
			${({ theme }) => getTypography(theme, 'heading2')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		span#billing-price-label {
			font-weight: bold;
		}
	}
`
