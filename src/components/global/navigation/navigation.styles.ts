import styled from 'styled-components'

export const NavigationContainer = styled.header`
	width: 100%;

	position: sticky;
	top: 0;
	z-index: 1;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: var(--grid-app-margin);

	/* background-color: ${({ theme }) => theme.colour.accent.primary.active}; */
`
