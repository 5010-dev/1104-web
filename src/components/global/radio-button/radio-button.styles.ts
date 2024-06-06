import styled, { css } from 'styled-components'

import { getTypography } from '../../../utils/typo.utils'
import { getColour } from '../../../utils/colour.utils'

import { RadioButtonContainerProps } from './radio-button.types'

export const RadioButtonContainer = styled.label<RadioButtonContainerProps>`
	display: flex;
	align-items: center;

	cursor: pointer;
	box-sizing: border-box;

	border-radius: ${({ theme }) => theme.shape.outlined.rounded2.borderRadii};

	${({ $isChecked }) =>
		$isChecked
			? css`
					box-shadow: none;
					background-color: ${({ theme }) =>
						getColour(theme, 'neutral', 'secondary', 'active')};
			  `
			: css`
					box-shadow: ${({ theme }) =>
						`${theme.shape.outlined.rounded3.boxShadow} ${getColour(
							theme,
							'neutral',
							'tertiary',
							'active',
						)}`};
					background-color: transparent;
			  `}

	padding: ${({ theme }) => theme.layout.container.padding.sm};
	padding-left: ${({ theme }) => theme.layout.container.padding.default};

	text-align: left;

	span {
		width: 100%;

		${({ theme }) => getTypography(theme, 'body')}

		${({ theme, $isChecked }) =>
			$isChecked
				? css`
						font-weight: bold;
						color: ${getColour(theme, 'neutral', 'primary', 'active')};
				  `
				: css`
						color: ${getColour(theme, 'neutral', 'secondary', 'active')};
				  `}
	}

	input {
		&::-ms-clear,
		&::-ms-reveal {
			display: none;
			width: 0;
			height: 0;
		}
		&::-webkit-search-decoration,
		&::-webkit-search-cancel-button,
		&::-webkit-search-results-button,
		&::-webkit-search-results-decoration {
			display: none;
		}

		all: unset;
		width: 0;
	}

	#icon {
		font-size: 1.5rem;
		color: ${({ theme }) => getColour(theme, 'accent', 'primary', 'active')};
	}
`
