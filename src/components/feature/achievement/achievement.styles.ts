import styled from 'styled-components'

import { SectionContainer } from '../../global/section/section.styles'
import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'

export const AchievementContainer = styled(SectionContainer)`
	width: ${({ theme }) => theme.layout.page.width};

	gap: ${({ theme }) => theme.layout.page.gutter};

	margin-top: ${({ theme }) => theme.layout.section.gutter};

	padding: 0;
	background-color: #ffffff;

	text-align: left;

	div#components-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		margin-top: ${({ theme }) => theme.layout.container.gutter};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;

		gap: ${({ theme }) => theme.layout.section.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#section-heading-container {
			margin-top: ${({ theme }) => theme.layout.section.gutter};

			span#section-category-text {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) => theme.colour.accent.primary.active};
			}

			h1#section-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) => theme.colour.neutral.primary.active};
			}
		}

		div#items-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
		}
	}
`
