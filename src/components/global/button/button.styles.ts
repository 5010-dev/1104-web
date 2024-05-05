import styled, { DefaultTheme } from 'styled-components'
import { motion } from 'framer-motion'
import { ButtonAppearance, ButtonHierarchy, ButtonShape } from './button.types'
import { getTypography } from '../../../utils/typoUtils'
import { getColour, getInvertedColour } from '../../../utils/colourUtils'

interface ButtonContainerProps {
	$appearance: ButtonAppearance
	$hierarchy: ButtonHierarchy
	$shape: ButtonShape
}

export const getButtonVariants = (
	theme: DefaultTheme,
	$appearance: ButtonAppearance,
	$hierarchy: ButtonHierarchy,
) => ({
	initial: {
		backgroundColor: getColour(theme, $appearance, $hierarchy, 'active'),
		color: getInvertedColour(theme, $appearance, $hierarchy, 'active'),
	},
	hover: {
		backgroundColor: getColour(theme, $appearance, $hierarchy, 'hover'),
		color: getInvertedColour(theme, $appearance, $hierarchy, 'hover'),
	},
	pressed: {
		backgroundColor: getColour(theme, $appearance, $hierarchy, 'pressed'),
		color: getInvertedColour(theme, $appearance, $hierarchy, 'pressed'),
	},
})

export const ButtonContainer = styled(motion.button)<ButtonContainerProps>`
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
	border-radius: ${({ theme, $shape }) =>
		$shape === 'rounding'
			? theme.shape.filled.rounding.borderRadii
			: theme.shape.filled.rounded2.borderRadii};

	span {
		${({ theme }) => getTypography(theme, 'subheading')}
		color: ${({ theme, $appearance, $hierarchy }) =>
			getInvertedColour(theme, $appearance, $hierarchy, 'active')};
	}

	&:disabled {
		cursor: not-allowed;
		background-color: ${({ theme, $appearance, $hierarchy }) =>
			getColour(theme, $appearance, $hierarchy, 'active')};
		color: ${({ theme, $appearance, $hierarchy }) =>
			getColour(theme, $appearance, $hierarchy, 'inactive')};
	}
`
