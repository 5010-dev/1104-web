import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const AuthFormContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.section.gutter};

	h1#heading {
		${({ theme }) => getTypography(theme, 'heading1')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	form#login-form {
		width: 100%;
		max-width: 18rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		.login-input {
			width: 100%;
		}

		#submit-button {
			width: 100%;
			box-sizing: border-box;
			margin: ${({ theme }) => `${theme.layout.container.gutter} 0`};
		}
	}
`
