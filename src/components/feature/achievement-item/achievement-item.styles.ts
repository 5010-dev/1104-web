import styled from 'styled-components'

import { SectionContainer } from '../../global/section/section.styles'
import { getTypography } from '../../../utils/typo.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getColour } from '../../../utils/colour.utils'

export const AchievementItemContainer = styled(SectionContainer)`
	width: ${({ theme }) => theme.layout.component.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	gap: ${({ theme, $deviceType }) =>
		$deviceType === 'desktop' ? '0' : `${theme.layout.component.gutter}`};

	padding: ${({ theme, $deviceType }) =>
		`${getDeviceTypePadding(theme, $deviceType, 'section')} 0`};

	border-bottom: ${({ theme }) =>
		`0.0625rem solid ${getColour(theme, 'neutral', 'tertiary', 'inactive')}`};

	div.title-container {
		span.caption {
			${({ theme }) => getTypography(theme, 'caption')}
			font-weight: bold;
			color: ${({ theme }) => theme.colour.accent.primary.active};
		}

		h2.heading {
			width: ${({ theme }) => theme.layout.component.width};

			${({ theme }) => getTypography(theme, 'heading2')}
			color: ${({ theme }) => theme.colour.neutral.primary.active};
		}
	}

	div.body-container {
		width: ${({ theme }) => theme.layout.container.width};

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;

		gap: ${({ theme }) => theme.layout.component.gutter};

		p.body {
			flex: 1 1 80%;
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) => theme.colour.neutral.primary.active};
		}

		.link-button {
			flex-direction: row-reverse;
		}
	}
`
