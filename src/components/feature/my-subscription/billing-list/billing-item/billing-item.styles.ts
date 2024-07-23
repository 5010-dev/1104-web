import styled from 'styled-components'
import { getTypography } from '../../../../../utils/typo.utils'
import { getColour } from '../../../../../utils/colour.utils'

export const BillingItemContainer = styled.div`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: ${({ theme }) => `${theme.layout.component.padding.sm} 0`};

	div.text-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		text-align: left;

		span.caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		div.subheading-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			p.subheading {
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			.subheading-chip {
				flex: 0 0 auto;
			}
		}

		p.body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
		}
	}
`
