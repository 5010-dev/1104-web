import styled from 'styled-components'

export const ConnectedAccountContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	span.connected-account-name {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 0.5rem;

		font-weight: bold;

		.logo {
			height: 1.5rem;
			width: 1.8rem;
		}
	}
`
