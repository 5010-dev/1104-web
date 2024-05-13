import styled from 'styled-components'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const SignupLinkContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	span#signup-text {
		${({ theme }) => getTypography(theme, 'body')}
		font-size: 0.875rem;

		color: ${({ theme }) =>
			getColour(theme, 'neutral', 'secondary', 'inactive')};
	}
`
