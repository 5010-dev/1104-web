import styled from 'styled-components'

import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

export const CheckoutTermsButtonConatiner = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};

	margin-top: ${({ theme }) => theme.layout.container.gutter};

	span.button-caption {
		${({ theme }) => getTypography(theme, 'body')}
		font-size: 0.875rem;
		color: ${({ theme }) =>
			getColour(theme, 'neutral', 'secondary', 'inactive')};

		.button-caption-icon {
			margin-right: 0.25rem;
		}
	}
`
