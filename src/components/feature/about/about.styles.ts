import styled from 'styled-components'
import { SectionContainer } from '../../global/section/section.styles'

import { getTypography } from '../../../utils/typo.utils'

export const AboutContainer = styled(SectionContainer)`
	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	gap: ${({ theme }) => theme.layout.page.gutter};

	div#text-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: ${({ theme }) => theme.layout.container.maxWidth};

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		span#section-category-text {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => theme.colour.accent.primary.active};
		}

		h1#heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) => theme.colour.neutral.secondary.active};
		}

		p#body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => theme.colour.neutral.secondary.active};
		}
	}

	div#second-row {
		width: ${({ theme }) => theme.layout.section.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		span#caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme }) => theme.colour.neutral.secondary.inactive};
		}

		div#items-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.container.gutter};
			flex-wrap: wrap;

			div.item-container {
				flex: 1 0 auto;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: ${({ theme }) => theme.layout.component.gutter};
				padding: ${({ theme }) => theme.layout.component.padding.lg};
				border-radius: ${({ theme }) =>
					theme.shape.filled.rounded2.borderRadii};
				text-align: left;

				background-color: ${({ theme }) =>
					theme.colour.neutral.tertiary.active};

				h3.item-subheading {
					${({ theme }) => getTypography(theme, 'subheading')}
					color: ${({ theme }) => theme.colour.neutral.secondary.inactive};
				}

				h3.item-heading {
					${({ theme }) => getTypography(theme, 'display')}
					color: ${({ theme }) => theme.colour.neutral.secondary.active};
				}
			}
		}
	}
`
