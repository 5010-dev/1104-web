import styled from 'styled-components'
import { getDeviceTypePadding } from '../../../utils/device.utils'
import { getContainerStyle } from '../../../utils/style.utils'

import { CardContainerProps } from './card.types'

export const CardContainer = styled.div<CardContainerProps>`
	width: ${({ theme }) => theme.layout.container.width};

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: ${({ theme }) => theme.layout.container.guttuer};
	padding: ${({ theme, $deviceType }) =>
		getDeviceTypePadding(theme, $deviceType, 'container')};

	cursor: ${({ $handleClick }) => $handleClick && 'pointer'};

	${({ theme, $appearance, $hierarchy, $stroke, $shape, $opacity }) =>
		getContainerStyle(
			theme,
			$appearance,
			$hierarchy,
			$stroke,
			$shape,
			$opacity,
		)}
`
