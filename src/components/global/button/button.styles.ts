import styled from 'styled-components'
import { motion } from 'framer-motion'
import { getPadding } from '../../../utils/style.utils'
import { getTypography } from '../../../utils/typo.utils'

import { ButtonContainerProps } from './button.types'

export const ButtonContainer = styled(motion.button)<ButtonContainerProps>`
	all: unset;
	cursor: pointer;
	user-select: none;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.component.gutter};
	padding: ${({ theme, $size }) => getPadding(theme, $size)};

	span {
		${({ theme }) => getTypography(theme, 'subheading')}
	}
`
