import styled from 'styled-components'

import { AccountSectionContainer } from '../../global/account-section/account-section.styles'
import { getColour, hexToRgba } from '../../../utils/colour.utils'

export const CustomerServiceContainer = styled(AccountSectionContainer)`
	flex-direction: row;
	align-items: center;

	#customer-service-icon {
		font-size: 2rem;
		color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.1)};
	}

	div#customer-text-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.25rem;

		text-align: left;
	}
`
