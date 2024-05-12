import styled, { css } from 'styled-components'

import { InputContainerProps } from './input.types'

import { getContainerStyle } from '../../../utils/style.utils'

export const InputContainer = styled.input<InputContainerProps>`
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
	-webkit-user-select: text;
	-moz-user-select: text;
	-ms-user-select: text;
	user-select: text;

	all: unset;

	cursor: text;
	box-sizing: border-box;

	background-color: #fff;

	${({ theme, $isFocused, $isValid, $hierarchy }) => {
		if ($isFocused) {
			return $isValid
				? css`
						${getContainerStyle(
							theme,
							'neutral',
							$hierarchy,
							'outlined',
							'rounded3',
						)}
				  `
				: css`
						${getContainerStyle(
							theme,
							'neutral',
							$hierarchy,
							'outlined',
							'rounded3',
						)}
				  `
		} else {
			return $isValid
				? css`
						${getContainerStyle(
							theme,
							'neutral',
							$hierarchy,
							'outlined',
							'rounded3',
						)}
				  `
				: css`
						${getContainerStyle(
							theme,
							'neutral',
							$hierarchy,
							'outlined',
							'rounded3',
						)}
				  `
		}
	}}
`
