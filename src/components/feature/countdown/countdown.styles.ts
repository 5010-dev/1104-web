import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { CountdownContainerProps } from './countdown.types'

export const CountdownContainer = styled.div<CountdownContainerProps>`
	width: ${({ theme }) => theme.layout.container.width};

	max-width: ${({ theme, $deviceType }) =>
		$deviceType === 'desktop' && theme.layout.section.maxWidth};

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${({ theme, $deviceType }) => {
		if ($deviceType === 'desktop') {
			return theme.layout.section.gutter
		} else if ($deviceType === 'tablet') {
			return theme.layout.container.gutter
		} else if ($deviceType === 'mobile') {
			return theme.layout.component.padding.sm
		}
	}};

	margin-top: ${({ theme }) => theme.layout.container.gutter};

	span.quant-counter-separator {
		${({ theme }) => getTypography(theme, 'display')}
		font-size: ${({ $deviceType }) => $deviceType === 'mobile' && '2.5rem'};
		color: ${({ theme }) => getColour(theme, 'neutral', 'tertiary', 'active')};
	}
`
