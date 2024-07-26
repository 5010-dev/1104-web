import styled from 'styled-components'

import { getColour, hexToRgba } from '../../../utils/colour.utils'

export const CustomerServiceContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${({ theme }) => theme.layout.section.gutter};

	#customer-service-card {
		flex-direction: row;
		align-items: center;

		#customer-service-icon {
			font-size: 2rem;
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.1)};
		}

		div#customer-text-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 0.25rem;

			text-align: left;
		}
	}

	#unregister-button {
		background-color: ${({ theme }) =>
			getColour(theme, 'neutral', 'primary', 'active')} !important;
	}
`
