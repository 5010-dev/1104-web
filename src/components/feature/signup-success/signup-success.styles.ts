import styled, { css } from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getContainerStyle } from '../../../utils/style.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { SignupSuccessContainerProps } from './signup-success.types'

import PageLayoutContainer from '../../../pages/global/page-layout/page-layout.styles'

type Props = SignupSuccessContainerProps

export const SignupSuccessContainer = styled(PageLayoutContainer)<Props>`
	position: relative;
	justify-content: center;

	div#signup-success-contents-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 30rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#signup-success-title-container {
			width: ${({ theme }) => theme.layout.container.width};
			max-width: 24rem;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			p.signup-success-subheading {
				${({ theme }) => getTypography(theme, 'subheading')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
				text-align: center;
			}
		}

		ul#signup-success-reward-ul {
			padding: 0;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			list-style-type: none;

			li.signup-success-reward-li {
				width: ${({ theme }) => theme.layout.component.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: 0.5rem;

				${({ theme }) =>
					getContainerStyle(
						theme,
						'accent',
						'primary',
						'filled',
						'rounded1',
						0.15,
					)}
				padding: ${({ theme }) =>
					`${theme.layout.component.padding.default} ${theme.layout.container.padding.default}`};

				${({ theme }) => getTypography(theme, 'heading3')}
				color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};

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

				span.signup-success-reward-body {
					${({ theme }) => getTypography(theme, 'body')}
					font-size: 0.875rem;
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'inactive')};
					text-align: left;
				}
			}
		}

		#signup-success-card {
			align-items: center;
			gap: ${({ theme }) => theme.layout.section.gutter};

			p.signup-success-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}
		}

		span.signup-success-caption {
			${({ theme }) => getTypography(theme, 'body')}
			font-size: 0.875rem;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
		}
	}
`
