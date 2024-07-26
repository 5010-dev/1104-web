import styled from 'styled-components'

import { getContainerStyle } from '../../../../../utils/style.utils'
import { getTypography } from '../../../../../utils/typo.utils'
import { getColour } from '../../../../../utils/colour.utils'

export const SubscribedItemContainer = styled.div`
	width: 12rem;

	flex: 1 0 auto;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	${({ theme }) =>
		getContainerStyle(theme, 'neutral', 'secondary', 'filled', 'rounded2', 0.1)}
	padding: ${({ theme }) => theme.layout.container.padding.sm};

	text-align: left;

	div.subscribed-item-contents-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 0.5rem;

		p.subscribed-item-heading {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}
`
