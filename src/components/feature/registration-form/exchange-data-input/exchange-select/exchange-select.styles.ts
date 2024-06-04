import styled from 'styled-components'

import { RegistrationForms } from '../../registration-form.styles'

import { getTypography } from '../../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../../utils/colour.utils'

export const ExchangeSelectContainer = styled(RegistrationForms)`
	p.body {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

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

	div#select-container {
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.layout.component.gutter};
	}

	#submit-button {
		width: ${({ theme }) => theme.layout.component.width};
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
