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
		color: ${({ theme, $isChecked, $hierarchy }) =>
			$isChecked
				? `${getColour(theme, 'accent', 'primary', 'active')}`
				: `${getColour(theme, 'neutral', $hierarchy, 'active')}`};
	}

	span#check-box-text {
		position: relative;

		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme, $hierarchy }) =>
			getColour(theme, 'neutral', $hierarchy, 'active')};
		text-align: left;

		#required-tag {
			position: absolute;
			bottom: 0.2rem;
			display: inline-block;
			margin-left: 0.25rem;
		}
	}
`
