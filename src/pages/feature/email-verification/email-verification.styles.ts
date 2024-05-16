import styled from 'styled-components'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const EmailVerificationContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	#lottie-verification-anim {
		width: 80%;
	}

	div#text-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

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

		span#caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	#resend-button {
		margin-top: ${({ theme }) => theme.layout.container.padding.lg};
	}

	#text-link {
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
