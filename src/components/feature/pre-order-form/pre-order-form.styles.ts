import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'
import { getContainerStyle } from '../../../utils/style.utils'

import { PreOrderFormContainerProps } from './pre-order-form.types'

export const PreOrderFormContainer = styled.form<PreOrderFormContainerProps>`
	position: relative;

	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.section.maxWidth};
	/* min-height: ${({ $deviceType }) =>
		$deviceType === 'mobile' ? '40rem' : '64rem'}; */

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	div#pre-order-form-contents-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		${({ theme }) =>
			getContainerStyle(
				theme,
				'neutral',
				'tertiary',
				'filled',
				'rounded1',
				0.5,
			)}

		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.padding.lg} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'section',
			)}`};

		z-index: 1;

		div#pre-order-form-text-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.component.gutter};

			span#pre-order-form-caption {
				${({ theme }) => getTypography(theme, 'subheading')}
				font-weight: bold;
				color: ${({ theme }) =>
					getColour(theme, 'accent', 'primary', 'active')};
			}

			h1#pre-order-form-heading {
				${({ theme }) => getTypography(theme, 'display')}
				font-size: 2.25rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
				line-height: 120%;
			}

			span#pre-order-form-subheading {
				${({ theme }) => getTypography(theme, 'heading3')}
				font-weight: bold;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
				margin-bottom: ${({ theme }) => theme.layout.section.gutter};
			}

			p.pre-order-form-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
				text-align: left;
			}
		}

		div#quant-pre-order-input-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			/* margin-top: ${({ theme }) => theme.layout.component.gutter}; */

			#quant-pre-order-input {
				width: ${({ theme }) => theme.layout.component.width};
				max-width: 30rem;
			}

			#quant-pre-order-button {
				width: 100%;
				max-width: 16rem;

				${({ theme }) => css`
					-webkit-filter: drop-shadow(
						0 0 1rem
							${hexToRgba(
								getColour(theme, 'accent', 'primary', 'active'),
								0.75,
							)}
					);
					filter: drop-shadow(
						0 0 1rem
							${hexToRgba(
								getColour(theme, 'accent', 'primary', 'active'),
								0.75,
							)}
					);
				`}
			}
		}
	}
`
