import styled from 'styled-components'

export const TosspaymentsWidgetContentsContainer = styled.div`
	position: relative;

	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > div {
		width: ${({ theme }) => theme.layout.component.width};
	}

	#widget-checkout-button {
		width: ${({ theme }) => theme.layout.component.width};
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}

	span#payment-initiate-error {
	}
`
