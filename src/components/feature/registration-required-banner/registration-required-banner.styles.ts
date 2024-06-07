import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../utils/colour.utils'

import { RegistrationRequiredBannerContentsContainerProps } from './registration-required-banner.types'

type Props = RegistrationRequiredBannerContentsContainerProps

export const RegistrationRequiredBannerContentsContainer = styled.div<Props>`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.container.gutter};

	text-align: left;

	div#banner-first-column {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 0.75rem;

		#banner-icon {
			font-size: 1.25rem;
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.25)};
		}

		p#banner-subheading {
			${({ theme }) => getTypography(theme, 'subheading')}
			font-size: ${({ $deviceType }) => $deviceType === 'mobile' && '0.875rem'};
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}
	}

	#banner-button {
		flex: 0 0 auto;
		padding: ${({ theme }) =>
			`0.25rem ${theme.layout.component.padding.default}`};
	}
`
