import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const VerificationFormContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};

	div#verification-text-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		h1#heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		p#body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	form#verification-form {
		width: 100%;
		max-width: 18rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		#submit-button {
			width: 100%;
			box-sizing: border-box;
			margin: ${({ theme }) => `${theme.layout.container.gutter} 0`};
		}
	}
`
