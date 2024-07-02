import styled, { css } from 'styled-components'

import { getContainerStyle } from '../../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { FreeTrialFormContainerProps } from './free-trial-form.types'

export const FreeTrialFormContainer = styled.form<FreeTrialFormContainerProps>`
	position: relative;

	/* width: ${({ theme }) => theme.layout.section.width}; */
	/* max-width: ${({ theme }) => theme.layout.section.maxWidth}; */
	max-width: 32rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	div#free-trial-form-input-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.container.gutter};

		${({ theme }) =>
			getContainerStyle(
				theme,
				'neutral',
				'tertiary',
				'filled',
				'rounded2',
				0.5,
			)}

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

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

		#free-trial-form-button {
			${({ theme }) => css`
				-webkit-filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
				filter: drop-shadow(
					0 0 1rem
						${hexToRgba(getColour(theme, 'accent', 'primary', 'active'), 0.75)}
				);
			`}
		}
	}
`
