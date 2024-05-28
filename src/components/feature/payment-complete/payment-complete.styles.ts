import styled from 'styled-components'

import PageLayoutContainer from '../../../pages/global/page-layout/page-layout.styles'
import { SectionContainer } from '../../global/section/section.styles'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const PaymentCompleteContainer = styled(PageLayoutContainer)`
	justify-content: center;
`

export const PaymentCompleteSectionContainer = styled(SectionContainer)`
	div#anim-container {
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
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	div#button-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: ${({ theme }) => theme.layout.container.gutter};
	}
`
