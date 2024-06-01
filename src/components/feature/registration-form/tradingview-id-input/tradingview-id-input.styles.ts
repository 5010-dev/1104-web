import styled from 'styled-components'

export const TradingviewIdInputContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};

	#tradingview-id-input {
		width: ${({ theme }) => theme.layout.component.width};
		max-width: 18rem;

		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
