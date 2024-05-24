import styled from 'styled-components'

export const UserAgreementContainer = styled.div`
	position: relative;

	width: 110%;
	align-self: center;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.container.gutter};

	.service-terms {
		margin-top: -0.75rem;
		margin-bottom: 0.25rem;
	}

	#registration-button {
		/* position: sticky;
		bottom: 1.5rem; */

		align-self: center;

		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
