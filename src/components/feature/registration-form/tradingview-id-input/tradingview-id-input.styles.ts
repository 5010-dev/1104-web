import styled from 'styled-components'

import { hexToRgba, getColour } from '../../../../utils/colour.utils'

export const TradingviewIdInputContainer = styled.form`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};

	.input-items {
		width: ${({ theme }) => theme.layout.component.width};
		max-width: 18rem;
	}

	#beginner-button {
		gap: 1.25rem;

		margin-bottom: ${({ theme }) => theme.layout.container.gutter};

		span {
			font-size: 0.875rem;
			text-align: left;
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.8)};
		}

		#beginner-icon {
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.25)};
			font-size: 1.5rem;
		}
	}

	#submit-button {
		margin-top: ${({ theme }) => theme.layout.container.gutter};
	}
`
