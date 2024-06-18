import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'
import { getContainerStyle } from '../../../utils/style.utils'

import { PreOrderFormContainerProps } from './pre-order-form.types'

export const PreOrderFormContainer = styled.form<PreOrderFormContainerProps>`
	position: relative;

	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.container.maxWidth};
	/* min-height: ${({ $deviceType }) =>
		$deviceType === 'mobile' ? '40rem' : '64rem'}; */

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	margin-top: ${({ theme, $deviceType }) =>
		$deviceType === 'mobile'
			? theme.layout.container.gutter
			: theme.layout.section.gutter};

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
			max-width: 28rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.component.gutter};

			#pre-order-form-chip {
				font-size: 0.875rem;
			}

			span#pre-order-form-subheading {
				${({ theme }) => getTypography(theme, 'subheading')}
				font-weight: bold;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
				margin-bottom: ${({ theme }) => theme.layout.section.gutter};
			}

			h1#pre-order-form-heading {
				${({ theme }) => getTypography(theme, 'display')}
				font-size: 2.25rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
				line-height: 120%;
			}

			p.pre-order-form-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
				text-align: left;
			}
		}

		div#quant-pre-order-event-container {
			width: ${({ theme }) => theme.layout.container.width};
			max-width: 28rem;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			${({ theme }) =>
				getContainerStyle(theme, 'neutral', 'secondary', 'filled', 'rounded2')}

			padding: ${({ theme, $deviceType }) =>
				getDeviceTypePadding(theme, $deviceType, 'container')};

			span#quant-pre-order-event-heading {
				font-size: 0.875rem;
				line-height: 150%;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
				margin-bottom: ${({ theme }) => theme.layout.component.gutter};
			}

			ol#quant-pre-order-event-option-list {
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: ${({ theme }) => theme.layout.component.gutter};
				padding: 0;

				counter-reset: item;
				list-style-type: none;

				li.quant-pre-order-event-option {
					position: relative;
					${({ theme }) => getTypography(theme, 'subheading')}
					text-align: left;
					/* text-indent: -3rem; */
					padding-left: 3.5rem;

					&::before {
						position: absolute;
						left: 0;
						width: 3rem;
						content: '혜택 ' counter(item) '. ';
						counter-increment: item;
						color: ${({ theme }) =>
							getColour(theme, 'neutral', 'secondary', 'inactive')};
					}
				}
			}
		}

		div#quant-pre-order-input-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			.quant-pre-order-input {
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

			#quant-pre-order-button {
				width: 100%;
				max-width: 12rem;

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
