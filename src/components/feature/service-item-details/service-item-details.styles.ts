import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const ServiceItemDetailsContainer = styled.div`
	position: relative;

	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0;

	div#service-details-heading-container {
		position: absolute;
		top: 1rem;

		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		opacity: 0.5;

		/* margin-top: ${({ theme }) => theme.layout.page.gutter}; */

		h3#service-details-heading {
			flex: 0 0 auto;
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		#down-icon {
			font-size: 2rem;
		}
	}

	div#service-details-img-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: ${({ theme }) => theme.layout.container.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: 0;

		img.service-item-details-img {
			width: ${({ theme }) => theme.layout.component.width};
		}
	}
`
