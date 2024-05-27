import styled from 'styled-components'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.component'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

export const CheckoutItemContainer = styled(StyledSectionContainer)`
	div#subscribe-plan-container {
		justify-content: flex-start !important;
		align-items: ${({ $deviceType }) =>
			$deviceType === 'mobile' && 'flex-start !important'};
		gap: ${({ theme }) => theme.layout.container.gutter};

		img#thumbnail-img {
			width: 6rem;
			border-radius: 0.5rem;
		}

		#item-text-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;

			text-align: left;

			span.caption {
				${({ theme }) => getTypography(theme, 'caption')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}

			h3.heading-3 {
				${({ theme }) => getTypography(theme, 'heading2')}
				color: ${({ theme }) =>
					getColour(theme, 'accent', 'primary', 'active')};
				line-height: 120%;
				margin-top: 0.75rem;

				& > span {
					font-size: 1rem;
					white-space: nowrap;
				}
			}
		}
	}
`
