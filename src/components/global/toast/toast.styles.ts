import styled from 'styled-components'

import { getColour } from '../../../utils/colour.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getContainerStyle } from '../../../utils/style.utils'

export const ToastContainer = styled.div`
	position: fixed;
	width: 100%;
	max-width: 37.5rem;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 9999;
	padding: 1rem;

	div#toast {
		width: auto;
		display: flex;
		align-items: center;
		gap: 0.75rem;

		background-color: ${({ theme }) =>
			getColour(theme, 'neutral', 'tertiary', 'active')};

		${({ theme }) =>
			getContainerStyle(theme, 'neutral', 'tertiary', 'filled', 'rounded3', 1)}
		padding: 1.25rem;

		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};

		p {
			width: 100%;
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			text-align: left;
		}

		span {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`
