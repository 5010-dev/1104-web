import styled, { css } from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { CheckoutCodeInputContainerProps } from './checkout-code-input.types'
import { StyledSectionContainer } from '../../global/styled-section/styled-section.styles'

type Props = CheckoutCodeInputContainerProps

export const CheckoutCodeInputContainer = styled(StyledSectionContainer)<Props>`
	#code-input {
		width: ${({ theme }) => theme.layout.component.width};
	}

	#code-input-container {
		gap: ${({ theme, $deviceType }) =>
			$deviceType === 'mobile'
				? theme.layout.component.gutter
				: theme.layout.container.gutter};

		#code-button {
			white-space: nowrap;

			${({ $deviceType }) =>
				$deviceType === 'mobile' &&
				css`
					padding-left: 0.75rem;
					padding-right: 0.75rem;
				`}
		}
	}

	div#coupon-validity-container {
		display: flex;
		align-items: center;
		gap: 0.25rem;

		.coupon-validity-caption {
			${({ theme }) => getTypography(theme, 'body')}
			font-size: 0.875rem;
			color: ${({ theme, $isValid }) =>
				$isValid
					? getColour(theme, 'neutral', 'secondary', 'active')
					: getColour(theme, 'system', 'primary', 'active')};
		}
	}
`
