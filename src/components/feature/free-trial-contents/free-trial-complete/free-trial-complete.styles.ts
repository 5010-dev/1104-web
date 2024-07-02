import styled from 'styled-components'

import { getContainerStyle } from '../../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { SectionContainer } from '../../../global/section/section.styles'

export const FreeTrialCompleteContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.maxWidth};
	height: 100vh;

	justify-content: center;
	align-items: center;

	p#free-trial-complete-body {
		max-width: 30rem;

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
			getDeviceTypePadding(theme, $deviceType, 'container')};

		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) =>
			hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
	}

	#free-trial-complete-button {
		margin-bottom: ${({ theme }) => theme.layout.page.gutter};
	}
`
