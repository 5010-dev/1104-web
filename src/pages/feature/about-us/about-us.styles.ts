import styled from 'styled-components'

import { getContainerStyle } from '../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const AboutUsContainer = styled(PageLayoutContainer)`
	position: relative;

	gap: 0;

	div#letter-to-investors {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		margin-bottom: ${({ theme }) => theme.layout.page.gutter};

		div#letter-contents-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.page.gutter};

			padding: ${({ theme, $deviceType }) =>
				getDeviceTypePadding(theme, $deviceType, 'section')};

			${({ theme }) =>
				getContainerStyle(
					theme,
					'neutral',
					'tertiary',
					'filled',
					'rounded1',
					0.75,
				)}

			& > * {
				width: ${({ theme }) => theme.layout.container.width};

				div.contents-container {
					padding: 0;
				}
			}
		}

		div#show-letter-button-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 0.5rem;

			span#show-letter-button-caption {
				${({ theme }) => getTypography(theme, 'subheading')}
				font-size: 0.875rem;
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}

			#show-letter-button {
				width: auto;
				margin-bottom: ${({ theme }) => theme.layout.component.gutter};
			}
		}
	}

	div#horizontal-line-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		padding: ${({ theme, $deviceType }) =>
			`0 ${getDeviceTypePadding(theme, $deviceType, 'section')}`};

		margin-bottom: ${({ theme }) => theme.layout.section.gutter};

		hr#horizontal-line {
			width: ${({ theme }) => theme.layout.component.width};
			max-width: ${({ theme }) => theme.layout.section.maxWidth};
			height: 0.0625rem;

			border: none;
			background-color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.25)};
		}
	}
`
