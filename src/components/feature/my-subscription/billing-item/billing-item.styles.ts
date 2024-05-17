import styled from 'styled-components'
import { getTypography } from '../../../../utils/typo.utils'
import { getColour } from '../../../../utils/colour.utils'

export const BillingItemContainer = styled.div`
	width: ${({ theme }) => theme.layout.component.width};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${({ theme }) => `${theme.layout.container.padding.sm} 0`};

	div.text-container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		span.caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		p.subheading {
			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		p.body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
		}
	}
`
