import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const StyledHeadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	text-align: center;

	h1#heading {
		${({ theme }) => getTypography(theme, 'heading1')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	span#subheading {
		${({ theme }) => getTypography(theme, 'subheading')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}
`
