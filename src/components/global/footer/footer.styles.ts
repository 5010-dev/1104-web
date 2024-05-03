import styled from 'styled-components'

export const FooterContainer = styled.div`
	width: ${({ theme }) => theme.layout.page.width};

	display: flex;
	justify-content: center;
	gap: 0.25rem;

	padding: ${({ theme }) => theme.layout.page.padding};

	font-family: ${({ theme }) => theme.typo.caption.typeface};
	font-size: ${({ theme }) => theme.typo.caption.size};
	font-weight: ${({ theme }) => theme.typo.caption.weight};
	line-height: ${({ theme }) => theme.typo.caption.leading};
	letter-spacing: ${({ theme }) => theme.typo.caption.kerning};

	span {
		font-weight: bold;
	}
`
