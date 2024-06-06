import styled from 'styled-components'

import { RegistrationForms } from '../registration-form/registration-form.styles'

export const AssetAmountSelectContainer = styled(RegistrationForms)`
	div#asset-input-container {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.layout.component.gutter};
	}

	#submit-button {
		width: ${({ theme }) => theme.layout.component.width};
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
