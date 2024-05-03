import styled from 'styled-components'

export const NavigationContainer = styled.header`
	width: ${({ theme }) => theme.layout.component.width};

	position: sticky;
	top: 0;
	z-index: 1;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${({ theme }) => theme.layout.page.padding};

	div.nav-bar-container {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		#logo {
			width: 5rem;
			height: fit-content;
		}

		button#menu-icon {
			all: unset;
			cursor: pointer;

			display: flex;
			justify-content: center;
			align-items: center;

			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;

			width: 2.5rem;
			font-size: 1.75rem;
		}
	}
	div#nav-bar-left-container {
		width: 100%;
	}
	div#nav-bar-right-container {
		width: fit-content;
	}

	/* background-color: ${({ theme }) => theme.colour.accent.primary.active}; */
`
