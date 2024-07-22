import styled from 'styled-components'

import { getContainerStyle } from '../../../utils/style.utils'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { EventBannerContainerProps } from './event-banner.types'

import backgroundImage from '../../../assets/img/banner-background-img.webp'

export const EventBannerContainer = styled.div<EventBannerContainerProps>`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;

	${({ theme }) =>
		getContainerStyle(theme, 'accent', 'primary', 'filled', 'rounded2', 1)}
	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'container')};

	background-image: url(${backgroundImage});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	h3.event-banner-heading {
		${({ theme }) => getTypography(theme, 'heading2')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
	}

	p.event-banner-caption {
		${({ theme }) => getTypography(theme, 'caption')}
		font-size: 0.875rem;
		font-weight: normal;
		color: ${({ theme }) =>
			getColour(theme, 'neutral', 'secondary', 'inactive')};
	}
`
