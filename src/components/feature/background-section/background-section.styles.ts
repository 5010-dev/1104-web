import styled from 'styled-components'

import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { SectionContainer } from '../../global/section/section.styles'

import { BackgroundSectionContainerProps } from './background-section.types'

type Props = BackgroundSectionContainerProps

export const BackgroundSectionContainer = styled(SectionContainer)<Props>`
	width: ${({ theme }) => theme.layout.page.width};

	justify-content: flex-start;
	align-items: center;

	padding: 0;
	margin: ${({ theme }) => `${theme.layout.section.gutter} 0`};

	div#contents-container {
		width: ${({ theme }) => theme.layout.section.width};
		max-width: ${({ theme }) => theme.layout.section.maxWidth};

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		gap: ${({ theme }) => theme.layout.page.gutter};

		padding: ${({ theme, $deviceType }) =>
			getDeviceTypePadding(theme, $deviceType, 'section')};

		span.caption {
			${({ theme }) => getTypography(theme, 'caption')}
			color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
			font-weight: bold;
		}

		h2.heading {
			${({ theme }) => getTypography(theme, 'heading1')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		p.body {
			${({ theme }) => getTypography(theme, 'body')}
			color: ${({ theme }) =>
				getColour(theme, 'neutral', 'secondary', 'active')};
		}

		div#title-text-container {
			width: ${({ theme }) => theme.layout.container.width};

			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: ${({ theme }) => theme.layout.section.gutter};

			text-align: left;
		}
	}
`
