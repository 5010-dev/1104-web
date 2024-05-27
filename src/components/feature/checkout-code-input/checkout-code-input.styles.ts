import styled, { css } from 'styled-components'

import { StyledSectionContainer } from '../../global/styled-section/styled-section.component'

export const CheckoutCodeInputContainer = styled(StyledSectionContainer)`
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
`
