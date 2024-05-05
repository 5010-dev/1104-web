import styled, { DefaultTheme } from 'styled-components'

import {
	ButtonAppearance,
	ButtonHierarchy,
	ButtonContainerProps,
} from './button.types'

import { getTypography } from '../../../utils/typoUtils'

/**
 * 버튼의 배경색을 결정하는 함수
 * @param theme 테마 객체
 * @param appearance 버튼의 외관 타입
 * @param hierarchy 버튼의 계층 타입
 * @returns 버튼의 배경색
 */
const getBackgroundColor = (
	theme: DefaultTheme,
	appearance: ButtonAppearance,
	hierarchy: ButtonHierarchy,
) => {
	switch (appearance) {
		case 'accent':
			return theme.colour.accent[hierarchy].active
		case 'neutral':
			return theme.colour.neutral[hierarchy].active
		case 'system':
			return theme.colour.systemRed[hierarchy].active
	}
}

/**
 * 버튼의 텍스트 색상을 결정하는 함수
 * @param theme 테마 객체
 * @param appearance 버튼의 외관 타입
 * @param hierarchy 버튼의 계층 타입
 * @returns 버튼의 텍스트 색상
 */
const getTextColor = (
	theme: DefaultTheme,
	appearance: ButtonAppearance,
	hierarchy: ButtonHierarchy,
) => {
	switch (hierarchy) {
		case 'primary':
			return theme.colour[appearance].secondary.active
		case 'secondary':
			return theme.colour[appearance].primary.active
	}
}

/**
 * 버튼의 활성 상태일 때의 배경색을 결정하는 함수
 * @param theme 테마 객체
 * @param appearance 버튼의 외관 타입
 * @param hierarchy 버튼의 계층 타입
 * @returns 버튼의 활성 상태 배경색
 */
const getActiveBackgroundColor = (
	theme: DefaultTheme,
	appearance: ButtonAppearance,
	hierarchy: ButtonHierarchy,
) => {
	switch (appearance) {
		case 'accent':
			return theme.colour.accent[hierarchy].hover
		case 'neutral':
			return theme.colour.neutral[hierarchy].hover
		case 'system':
			return theme.colour.systemRed[hierarchy].hover
	}
}

/**
 * 버튼의 활성 상태일 때의 텍스트 색상을 결정하는 함수
 * @param theme 테마 객체
 * @param appearance 버튼의 외관 타입
 * @param hierarchy 버튼의 계층 타입
 * @returns 버튼의 활성 상태 텍스트 색상
 */
const getActiveTextColor = (
	theme: DefaultTheme,
	appearance: ButtonAppearance,
	hierarchy: ButtonHierarchy,
) => {
	switch (hierarchy) {
		case 'primary':
			return theme.colour[appearance].secondary.hover
		case 'secondary':
			return theme.colour[appearance].primary.hover
	}
}

/**
 * 버튼의 비활성 상태일 때의 배경색을 결정하는 함수
 * @param theme 테마 객체
 * @param appearance 버튼의 외관 타입
 * @param hierarchy 버튼의 계층 타입
 * @returns 버튼의 비활성 상태 배경색
 */
const getDisabledBackgroundColor = (
	theme: DefaultTheme,
	appearance: ButtonAppearance,
	hierarchy: ButtonHierarchy,
) => {
	switch (appearance) {
		case 'accent':
			return theme.colour.accent[hierarchy].disabled
		case 'neutral':
			return theme.colour.neutral[hierarchy].disabled
		case 'system':
			return theme.colour.systemRed[hierarchy].disabled
	}
}

/**
 * 버튼의 비활성 상태일 때의 텍스트 색상을 결정하는 함수
 * @param theme 테마 객체
 * @param appearance 버튼의 외관 타입
 * @param hierarchy 버튼의 계층 타입
 * @returns 버튼의 비활성 상태 텍스트 색상
 */
const getDisabledTextColor = (
	theme: DefaultTheme,
	appearance: ButtonAppearance,
	hierarchy: ButtonHierarchy,
) => {
	switch (hierarchy) {
		case 'primary':
			return theme.colour[appearance].secondary.disabled
		case 'secondary':
			return theme.colour[appearance].primary.disabled
	}
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
	all: unset;
	cursor: pointer;

	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.layout.component.gutter};

	padding: ${({ theme }) =>
		`${theme.layout.component.padding.default} ${theme.layout.component.padding.lg}`};
	border-radius: ${({ theme, $shape }) =>
		($shape === 'rounding' && `${theme.shape.filled.rounding.borderRadii}`) ||
		($shape === 'rounded' && `${theme.shape.filled.rounded2.borderRadii}`)};

	background-color: ${({ theme, $appearance, $hierarchy }) =>
		getBackgroundColor(theme, $appearance, $hierarchy)};

	span {
		${({ theme }) => getTypography(theme, 'subheading')}
		color: ${({ theme, $appearance, $hierarchy }) =>
			getTextColor(theme, $appearance, $hierarchy)};
	}

	&:active {
		background-color: ${({ theme, $appearance, $hierarchy }) =>
			getActiveBackgroundColor(theme, $appearance, $hierarchy)};
		color: ${({ theme, $appearance, $hierarchy }) =>
			getActiveTextColor(theme, $appearance, $hierarchy)};
	}

	&:disabled {
		background-color: ${({ theme, $appearance, $hierarchy }) =>
			getDisabledBackgroundColor(theme, $appearance, $hierarchy)};
		color: ${({ theme, $appearance, $hierarchy }) =>
			getDisabledTextColor(theme, $appearance, $hierarchy)};
	}
`
