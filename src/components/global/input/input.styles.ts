import styled, { css } from 'styled-components'

import { InputContainerProps } from './input.types'

import { getColour } from '../../../utils/colour.utils'
import { getTypography } from '../../../utils/typo.utils'

export const InputContainer = styled.input<InputContainerProps>`
	all: unset;

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

	cursor: text;
	box-sizing: border-box;

	border: none;
	border-radius: ${({ theme }) => theme.shape.outlined.rounded3.borderRadii};
	padding: ${({ theme }) => theme.layout.component.padding.default};

	background-color: transparent;
	text-align: left;
	${({ theme }) => getTypography(theme, 'subheading')}

	${({ theme, $isFocused, $isValid, $hierarchy }) => {
		if ($isValid) {
			return $isFocused
				? css`
						box-shadow: ${theme.shape.outlined.rounded3.boxShadow}
							${getColour(theme, 'neutral', $hierarchy, 'active')};
						color: ${getColour(theme, 'neutral', $hierarchy, 'active')};
				  `
				: css`
						box-shadow: ${theme.shape.outlined.rounded3.boxShadow}
							${getColour(theme, 'neutral', $hierarchy, 'inactive')};
						color: ${getColour(theme, 'neutral', $hierarchy, 'inactive')};
				  `
		} else {
			return $isFocused
				? css`
						box-shadow: ${theme.shape.outlined.rounded3.boxShadow}
							${getColour(theme, 'system', $hierarchy, 'active')};
						color: ${getColour(theme, 'system', $hierarchy, 'active')};
				  `
				: css`
						box-shadow: ${theme.shape.outlined.rounded3.boxShadow}
							${getColour(theme, 'system', $hierarchy, 'inactive')};
						color: ${getColour(theme, 'system', $hierarchy, 'inactive')};
				  `
		}
	}}
  
  &::placeholder {
		${({ theme }) => getTypography(theme, 'body')}
		color: ${({ theme, $hierarchy }) =>
			getColour(theme, 'neutral', $hierarchy, 'inactive')};
	}

	&::-webkit-autofill {
		-webkit-box-shadow: 0 0 0 1000px white inset;
		-webkit-text-fill-color: black;
	}

	&:-moz-autofill {
		-moz-box-shadow: 0 0 0 1000px white inset;
		-moz-text-fill-color: black;
	}

	&:-ms-input-placeholder {
		background-color: white;
		color: black;
	}
`
