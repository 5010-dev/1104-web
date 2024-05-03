import styled from 'styled-components'

export const PageLayoutContainer = styled.div`
	width: 100%;
	min-width: ${({ theme }) => theme.layout.page.minWidth};
	min-height: calc(100vh - 4.25rem);

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.page.gutter};

	padding: ${({ theme }) => theme.layout.page.padding};
`

export default PageLayoutContainer
