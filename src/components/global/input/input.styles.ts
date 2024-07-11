import styled, { css } from 'styled-components'

import { InputContainerProps } from './input.types'

import { getColour } from '../../../utils/colour.utils'
import { getTypography } from '../../../utils/typo.utils'

export const InputContainer = styled.div<InputContainerProps>`
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.25rem;

	& > input,
	textarea {
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

		${({ $isTextfield }) =>
			$isTextfield &&
			css`
				height: 25vh;
				max-height: 12rem;
				min-height: 10rem;

				overflow-y: auto;
				word-wrap: break-word;
				white-space: pre-wrap;
			`}

		width: ${({ theme }) => theme.layout.component.width};

		border: none;
		border-radius: ${({ theme }) => theme.shape.outlined.rounded3.borderRadii};
		// TODO: 버튼 있을때 패딩 조절 필요
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
	}

	div#input-buttons-container {
		position: absolute;

		right: 0.25rem;
		top: 50%;
		transform: translateY(-50%);

		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;

		z-index: 5;

		.input-function-button {
			font-size: 1rem;

			padding: 0.5rem 0.4rem;

			color: ${({ theme, $isFocused, $isValid, $hierarchy }) => {
				if ($isValid) {
					return $isFocused
						? getColour(theme, 'neutral', $hierarchy, 'active')
						: getColour(theme, 'neutral', $hierarchy, 'inactive')
				} else {
					return $isFocused
						? getColour(theme, 'system', $hierarchy, 'active')
						: getColour(theme, 'system', $hierarchy, 'inactive')
				}
			}};
		}
	}

	& > span {
		width: ${({ theme }) => theme.layout.component.width};

		${({ theme }) => getTypography(theme, 'caption')}
		font-weight: normal;

		color: ${({ theme, $isFocused, $isValid, $hierarchy }) => {
			if ($isValid) {
				return $isFocused
					? getColour(theme, 'neutral', $hierarchy, 'active')
					: getColour(theme, 'neutral', $hierarchy, 'inactive')
			} else {
				return $isFocused
					? getColour(theme, 'system', $hierarchy, 'active')
					: getColour(theme, 'system', $hierarchy, 'inactive')
			}
		}};

		text-align: right;
		padding: ${({ theme }) => `0 ${theme.layout.component.padding.default}`};
	}
`
