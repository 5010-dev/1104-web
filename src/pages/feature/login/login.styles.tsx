import styled from 'styled-components'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const LoginContainer = styled(PageLayoutContainer)`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};
`
