import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { SectionContainer } from '../../global/section/section.styles'

export const PreOrderDetailsContainer = styled(SectionContainer)`
	max-width: ${({ theme }) => theme.layout.container.maxWidth};
	padding-top: 0;
	padding-bottom: 0;

	#quant-pre-order-details-card {
		padding: ${({ theme, $deviceType }) =>
			`${theme.layout.section.padding.lg} ${getDeviceTypePadding(
				theme,
				$deviceType,
				'section',
			)}`};

		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		div#quant-pre-order-details-text-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;

			h1#quant-pre-order-details-heading {
				${({ theme }) => getTypography(theme, 'heading1')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'active')};
			}

			p#quant-pre-order-details-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					getColour(theme, 'neutral', 'secondary', 'inactive')};
			}
		}
	}
`
