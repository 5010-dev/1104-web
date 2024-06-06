import styled from 'styled-components'

import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { RegistrationForms } from '../registration-form.styles'

export const ExchangeUidInputContainer = styled(RegistrationForms)`
	#exchange-registration-button {
		gap: 1.25rem;

		margin-bottom: ${({ theme }) => theme.layout.container.gutter};

		span {
			font-size: 0.875rem;
			text-align: left;
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.8)};
		}

		#exchange-registration-icon {
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.25)};
			font-size: 1.5rem;
		}
	}

	#submit-button {
		width: ${({ theme }) => theme.layout.component.width};
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
