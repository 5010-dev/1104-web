import styled from 'styled-components'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.styles'

export const MyAccountContainer = styled(StyledSectionContainer)`
	div#my-account-container-row {
		flex-wrap: wrap;
		gap: ${({ theme }) => theme.layout.container.gutter};

		#change-password-button {
			flex: 0 0 auto;
		}
	}
`
