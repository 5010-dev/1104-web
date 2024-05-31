import styled from 'styled-components'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const IndicatorRegistrationContainer = styled(PageLayoutContainer)`
	justify-content: center;

	div#contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: 25rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		padding: ${({ theme }) => `${theme.layout.section.gutter} 0`};
	}
`
