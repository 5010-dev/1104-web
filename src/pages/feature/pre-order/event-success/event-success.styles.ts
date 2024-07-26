import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../../utils/device.utils'
import { getTypography } from '../../../../utils/typo.utils'
import { hexToRgba, getColour } from '../../../../utils/colour.utils'

import PageLayoutContainer from '../../../global/page-layout/page-layout.styles'

export const EventSuccessContainer = styled(PageLayoutContainer)`
	justify-content: center;
	align-items: center;

	div#event-success-contents-container {
		width: ${({ theme }) => theme.layout.container.container};
		max-width: ${({ theme }) => theme.layout.container.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${({ theme }) => theme.layout.section.gutter};

		margin-bottom: ${({ theme }) => theme.layout.page.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		div#event-success-text-container {
			width: ${({ theme }) => theme.layout.container.width};
			max-width: 22rem;

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			gap: ${({ theme }) => theme.layout.container.gutter};

			p.event-success-body {
				${({ theme }) => getTypography(theme, 'body')}
				color: ${({ theme }) =>
					hexToRgba(getColour(theme, 'neutral', 'secondary', 'active'), 0.75)};
			}
		}

		div#event-success-buttons-container {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: stretch;
			gap: ${({ theme }) => theme.layout.container.gutter};
		}
	}
`
