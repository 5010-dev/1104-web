import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import PageLayoutContainer from '../../../pages/global/page-layout/page-layout.styles'

export const PreOrderDetailsContainer = styled(PageLayoutContainer)`
	position: relative;

	gap: 0;

	div#pre-order-details-contents-container {
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		width: ${({ theme }) => theme.layout.container.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#pre-order-details-title-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			justify-content: space-between;
			align-items: center;

			span.title-span {
				font-family: 'Big Shoulders Display';
				font-size: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '0.875rem' : '1rem'};
				font-weight: 400;
				width: 100%;

				display: flex;
				justify-content: center;
				align-items: center;
				gap: ${({ $deviceType }) =>
					$deviceType === 'mobile' ? '0.25rem' : '0.5rem'};
			}

			#quant-logo {
				flex: 0 0 auto;
				width: auto;
				height: 4rem;
				margin: 1rem 0;
			}
		}

		#pre-order-details-card {
			align-items: center;

			justify-content: flex-start;

			h1#pre-order-details-heading {
				${({ theme }) => getTypography(theme, 'heading3')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'primary', 'active')};
				margin-bottom: ${({ theme }) => theme.layout.container.gutter};
			}

			img.quant-details-img {
				width: 100%;
			}

			#pre-order-to-register-button {
				position: fixed;

				bottom: 1rem;
				margin-top: ${({ theme }) => theme.layout.section.gutter};
				z-index: 10;
			}
		}
	}
`
