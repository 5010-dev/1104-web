import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const AccountContainer = styled(PageLayoutContainer)`
	min-height: auto;

	width: ${({ theme }) => theme.layout.section.width};

	div#contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		margin-top: ${({ $deviceType }) =>
			$deviceType === 'mobile' ? '6rem' : '10rem'};
		margin-bottom: 2rem;

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
	}
`
