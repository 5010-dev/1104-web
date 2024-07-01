import styled from 'styled-components'

import { getContainerStyle } from '../../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { SectionContainer } from '../../../global/section/section.styles'

export const FreeTrialAudienceSectionContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.section.maxWidth};

	ul#free-trial-audience-ul {
		${({ theme }) =>
			getContainerStyle(
				theme,
				'neutral',
				'secondary',
				'filled',
				'rounded2',
				0.1,
			)}

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'container')};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: ${({ theme }) => theme.layout.component.gutter};

		list-style-type: none;

		li.free-trial-audience-li {
			${({ theme }) => getTypography(theme, 'heading3')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};

			.free-trial-audience-li-icon {
				opacity: 0.25;
				margin-right: 0.5rem;
			}
		}
	}

	h3#free-trial-audience-summary {
		${({ theme }) => getTypography(theme, 'heading1')}
		color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
	}
`
