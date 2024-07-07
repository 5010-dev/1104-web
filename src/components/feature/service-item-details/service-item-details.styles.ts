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

	div#service-item-details-title-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		padding: ${({ theme }) => `${theme.layout.section.gutter} 0`};

		hr#service-item-details-vertical-line {
			width: 0.0625rem;
			height: 6rem;

			border: none;
			background-color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};

			margin-bottom: 1rem;
		}

		span#service-item-details-caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}

		h3#service-item-details-heading {
			flex: 0 0 auto;
			${({ theme }) => getTypography(theme, 'heading2')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
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
