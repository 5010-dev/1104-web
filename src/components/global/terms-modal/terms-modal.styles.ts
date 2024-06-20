import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getContainerStyle } from '../../../utils/style.utils'

export const TermsModalContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	/* gap: ${({ theme }) => theme.layout.container.gutter}; */

	& > h3 {
		margin: 1rem 0;
		/* padding-bottom: 0.5rem; */
		${({ theme }) => getTypography(theme, 'subheading')}
	}

	ul {
		padding-left: 1.5rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.25rem;

		${({ theme }) => getTypography(theme, 'body')}
	}

	ol {
		padding-left: 1.5rem;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.25rem;

		${({ theme }) => getTypography(theme, 'body')}
	}

	& > :first-child {
		padding-top: 0;
	}

	& > :last-child {
		padding-bottom: 0;
	}

	& > blockquote {
		padding: ${({ theme }) =>
			theme.layout.component.padding.default} !important;
		${({ theme }) =>
			getContainerStyle(theme, 'neutral', 'primary', 'filled', 'rounded3', 0.1)}
		margin-top: 1rem;
	}
`
