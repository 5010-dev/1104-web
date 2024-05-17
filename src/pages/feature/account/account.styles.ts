import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour, hexToRgba } from '../../../utils/colour.utils'
import { getContainerStyle } from '../../../utils/style.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const AccountContainer = styled(PageLayoutContainer)`
	min-height: auto;

	div#contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		margin: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? '6rem 0' : '10rem 0'};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		h1#heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		div#account-info-container {
			width: ${({ theme }) => theme.layout.container.width};

			${({ theme }) =>
				getContainerStyle(
					theme,
					'neutral',
					'secondary',
					'filled',
					'rounded2',
					0.05,
				)}

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.section.gutter};

			padding: ${({ theme }) =>
				`${theme.layout.section.gutter} ${theme.layout.container.padding.default}`};

			div.container-row {
				width: ${({ theme }) => theme.layout.container.width};

				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: flex-start;
				gap: ${({ theme }) => theme.layout.component.gutter};

				h2.heading-2 {
					${({ theme }) => getTypography(theme, 'body')}

					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'inactive')};
				}

				p.body {
					${({ theme }) => getTypography(theme, 'subheading')}
					color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'active')};
				}

				span {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					gap: 0.5rem;

					.logo {
						height: 1.5rem;
						width: 1.8rem;
					}
				}
			}

			hr {
				width: 100%;
				height: 0.0625rem;
				border: none;
				background-color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.1)};
			}
		}
	}
`
