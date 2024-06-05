import styled from 'styled-components'

import { RegistrationForms } from '../registration-form.styles'

export const ExchangeUidInputContainer = styled(RegistrationForms)`
	#submit-button {
		width: ${({ theme }) => theme.layout.component.width};
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
