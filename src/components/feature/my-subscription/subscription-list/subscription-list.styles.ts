import styled from 'styled-components'

import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

export const SubscriptionListContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: stretch;
	gap: ${({ theme }) => theme.layout.container.gutter};
	flex-wrap: wrap;

	p#subscription-list-body {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}
`
