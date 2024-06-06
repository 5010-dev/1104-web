import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const RgistrationCompleteContainer = styled.div`
	width: ${({ theme }) => theme.layout.section.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};

	p.body {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	#go-home-button {
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}

	div#community-container {
		width: ${({ theme }) => theme.layout.container.width};
		padding-top: ${({ theme }) => theme.layout.page.gutter};

		& > * {
			padding: 0;
		}
	}
`
