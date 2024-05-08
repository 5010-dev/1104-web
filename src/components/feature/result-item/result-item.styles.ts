import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'

import { CardContainer } from '../../global/card/card.styles'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba } from '../../../utils/colour.utils'

export const ResultItemContainer = styled(CardContainer)`
	width: ${({ theme }) => theme.layout.component.width};
	min-height: 30rem;

	justify-content: space-between;
	align-items: center;

	div.contents-container {
		width: ${({ theme }) => theme.layout.component.width};
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	div#inactive-contents-container {
		gap: ${({ theme }) => theme.layout.container.gutter};

		h3#voice {
			width: 80%;
			${({ theme }) => getTypography(theme, 'heading2')}
			color: ${({ theme }) => theme.colour.neutral.primary.active};
		}

		p#name {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => theme.colour.neutral.primary.active};
		}
	}

	div#active-contents-container {
		gap: ${({ theme }) => theme.layout.section.gutter};

		div#text-container {
			span#period {
				${({ theme }) => getTypography(theme, 'caption')}
				color: ${({ theme }) => theme.colour.neutral.primary.active};
			}

			h3#result {
				display: flex;
				flex-direction: column;

				${({ theme }) => getTypography(theme, 'heading1')}
				line-height: 130%;
				color: ${({ theme }) => theme.colour.neutral.primary.active};

				margin-bottom: ${({ theme }) => theme.layout.component.gutter};

				span#result-surfix {
					${({ theme }) => getTypography(theme, 'heading2')}
				}
			}
		}

		p#comment {
			width: 90%;

			${({ theme }) => getTypography(theme, 'subheading')}
			color: ${({ theme }) =>
				hexToRgba(theme.colour.neutral.primary.active, 0.5)};
		}
	}

	.see-result-button {
		padding-right: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'container')};
		margin-bottom: ${({ theme }) => theme.layout.component.gutter};
	}
`
