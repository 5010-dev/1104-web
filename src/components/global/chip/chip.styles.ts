import styled from 'styled-components'
import { ChipContainerProps } from './chip.types'
import designTokens from '../../../styles/degisn-tokens/design-tokens.tokens'

import { getTypography } from '../../../utils/typo.utils'
import { getContainerStyle } from '../../../utils/style.utils'

export const ChipContainer = styled.div<ChipContainerProps>`
	display: flex;
	align-items: center;

	padding: ${designTokens.layout.spacing.xsm} ${designTokens.layout.spacing.sm};

	${({ theme }) => getTypography(theme, 'caption')}
	font-weight: bold;
	line-height: 100%;

	${({ theme, $appearance, $hierarchy, $stroke, $shape, $inverted }) =>
		$inverted
			? getContainerStyle(
					theme,
					$appearance,
					$hierarchy,
					$stroke,
					$shape,
					0.75,
					$inverted,
			  )
			: getContainerStyle(theme, $appearance, $hierarchy, $stroke, $shape)}
`
