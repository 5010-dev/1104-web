import styled from 'styled-components'

import PageLayoutContainer from '../../../pages/global/page-layout/page-layout.styles'
import { SectionContainer } from '../../global/section/section.styles'

export const PaymentCompleteContainer = styled(PageLayoutContainer)`
	justify-content: center;
`

export const PaymentCompleteSectionContainer = styled(SectionContainer)`
	div#button-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: ${({ theme }) => theme.layout.container.gutter};
	}
`
