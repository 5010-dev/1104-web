import styled from 'styled-components'

export const PageLayoutContainer = styled.div`
	width: 100%;
	min-width: var(--grid-app-min-width);
	min-height: calc(100vh - 4.25rem);

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0;

	padding: var(--grid-app-margin);
`

export default PageLayoutContainer
