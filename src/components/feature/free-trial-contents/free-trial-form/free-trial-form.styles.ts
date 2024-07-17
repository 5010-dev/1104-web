import styled from 'styled-components'

import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { FreeTrialFormContainerProps } from './free-trial-form.types'

export const FreeTrialFormContainer = styled.form<FreeTrialFormContainerProps>`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div#free-trial-form-input-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		#free-trial-form-icon {
			font-size: 2rem;
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
		}

		p#free-trial-form-body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
			margin-bottom: ${({ theme }) => theme.layout.section.gutter};
		}

		.free-trial-form-input {
			width: ${({ theme }) => theme.layout.component.width};
			max-width: 28rem;
		}

		p#quant-pre-oder-button-description {
			${({ theme }) => getTypography(theme, 'body')}
			font-size: 0.875rem;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			margin-top: ${({ theme }) => theme.layout.container.gutter};
		}
	}
`
