import styled from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { CheckBoxContainerProps } from './check-box.types'

export const CheckBoxContainer = styled.label<CheckBoxContainerProps>`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 0.5rem;

	input {
		display: none;
	}

	span#check-box-icon {
		${({ theme }) => getTypography(theme, 'body')}
		font-size: 1.25rem;
		line-height: 130%;
		color: ${({ theme, $isChecked }) =>
			$isChecked
				? `${getColour(theme, 'accent', 'primary', 'active')}`
				: `${getColour(theme, 'neutral', 'secondary', 'active')}`};
	}

	span#check-box-text {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme }) => getColour(theme, 'neutral', 'secondary', 'active')};
		text-align: left;
	}
`
