import styled from 'styled-components'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const AboutUsContainer = styled(PageLayoutContainer)`
	position: relative;

	div#achievement-result-container {
		width: ${({ theme }) => theme.layout.page.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		background-color: #ffffff;
	}
`
