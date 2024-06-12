import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { hexToRgba } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../global/page-layout/page-layout.styles'

export const OurServiceContainer = styled(PageLayoutContainer)`
	position: relative;
	gap: 0;

	#our-service-hero {
		&::before {
			background: ${({ theme }) =>
				`linear-gradient(to bottom, ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.8,
				)},  ${hexToRgba(
					theme.colour.neutral.primary.active,
					0.9,
				)}, ${hexToRgba(theme.colour.neutral.primary.active, 1)})`} !important;
		}

		div#hero-text-container {
			max-width: 80rem;

			span#subheading {
				width: 80%;
			}
		}
	}

	div#our-service-contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.page.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#our-service-items-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.section.gutter};

			margin-bottom: ${({ theme }) => theme.layout.page.gutter};
		}
	}
`
