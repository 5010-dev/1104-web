import styled from 'styled-components'

import { SectionContainer } from '../../global/section/section.styles'

export const FrequentQuestionsContainer = styled(SectionContainer)`
	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	gap: ${({ theme }) => theme.layout.page.gutter};
`
