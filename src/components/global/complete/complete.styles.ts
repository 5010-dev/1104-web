import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const CompleteContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	#lottie-anim {
		width: 16rem;
	}

	h1#heading {
		${({ theme }) => getTypography(theme, 'heading1')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}
`
