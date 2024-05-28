import styled from 'styled-components'

import { getContainerStyle } from '../../../utils/style.utils'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.styles'

export const CheckoutTermsContainer = styled(StyledSectionContainer)`
	div#terms-container {
		${({ theme }) =>
			getContainerStyle(
				theme,
				'neutral',
				'secondary',
				'filled',
				'rounded3',
				0.05,
			)}
		padding: ${({ theme }) => theme.layout.component.gutter};

		& > * {
			opacity: 0.65;
		}
	}
`
