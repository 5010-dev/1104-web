import styled from 'styled-components'

export const UserAgreementContainer = styled.div`
	width: 110%;
	align-self: center;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.container.gutter};
`
