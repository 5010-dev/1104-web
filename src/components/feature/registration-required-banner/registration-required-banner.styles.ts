import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const RegistrationRequiredBannerContentsContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.25rem;

	text-align: left;

	p#banner-subheading {
		${({ theme }) => getTypography(theme, 'subheading')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}
`
