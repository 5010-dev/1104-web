import styled from 'styled-components'

import { getColour } from '../../../utils/colour.utils'

export const SellerCodeInputContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	div#heading-container {
		padding: 0 0.25rem;

		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
		font-size: 0.875rem;
	}
`
