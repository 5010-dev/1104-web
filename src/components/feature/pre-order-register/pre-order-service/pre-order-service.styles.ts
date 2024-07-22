import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import { PreOrderServiceContainerProps } from './pre-order-service.types'

export const PreOrderServiceContainer = styled.div<PreOrderServiceContainerProps>`
	position: relative;

	width: ${({ theme }) => theme.layout.section.width};
	max-width: ${({ theme }) => theme.layout.container.maxWidth};

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'section')};

	margin-top: ${({ theme }) => theme.layout.page.gutter};
	margin-bottom: ${({ theme }) => theme.layout.container.gutter};

	div#pre-order-service-contents-container {
		width: ${({ theme }) => theme.layout.container.width};
		max-width: 28rem;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.component.gutter};

		/* z-index: 1; */

		#pre-order-service-chip {
			font-size: 0.875rem;
		}

		span#pre-order-service-subheading {
			${({ theme }) => getTypography(theme, 'subheading')}
			font-weight: bold;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'inactive')};
			margin-bottom: ${({ theme }) => theme.layout.section.gutter};
		}

		h1#pre-order-service-heading {
			${({ theme }) => getTypography(theme, 'display')}
			font-size: 2.25rem;
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
			line-height: 120%;
		}

		p.pre-order-service-body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
			text-align: left;
			align-self: flex-start;
		}

		#pre-order-service-button {
			margin-top: ${({ theme }) => theme.layout.container.gutter};
		}
	}
`
