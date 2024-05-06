import styled from 'styled-components'
import { motion } from 'framer-motion'
import { getTypography } from '../../../utils/typo.utils'

export const ButtonContainer = styled(motion.button)`
	all: unset;
	cursor: pointer;
	user-select: none;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.component.gutter};
	padding: ${({ theme }) =>
		`${theme.layout.component.padding.default} ${theme.layout.component.padding.lg}`};

	span {
		${({ theme }) => getTypography(theme, 'subheading')}
	}
`
