import styled from 'styled-components'

import { RegistrationForms } from '../registration-form.styles'

import { hexToRgba, getColour } from '../../../../utils/colour.utils'

export const TradingviewIdInputContainer = styled(RegistrationForms)`
	#beginner-button {
		gap: 1.25rem;

		margin-bottom: ${({ theme }) => theme.layout.container.gutter};

		span {
			font-size: 0.875rem;
			text-align: left;
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.8)};
		}

		#beginner-icon {
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
