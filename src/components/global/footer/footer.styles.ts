import styled from 'styled-components'

export const FooterContainer = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	gap: 0.5rem;

	padding: var(--grid-app-margin);

	font-size: var(--typo-caption-font-size);
	font-weight: var(--typo-caption-font-weight);

	span {
		font-weight: 600;
	}
`
