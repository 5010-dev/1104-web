import { DefaultTheme } from 'styled-components'
import {
	ComponentState,
	ComponentAppearance,
	ComponentHierarchy,
	ComponentStroke,
	ComponentShape,
	ComponentSize,
} from '../styles/design-system/design-system.types'

import { getColour, getInvertedColour } from './colour.utils'

/**
 * 컴포넌트의 상태에 따른 스타일을 생성하는 함수
 * @param theme 테마 객체
 * @param appearance 컴포넌트의 외관 타입 ('accent', 'neutral', 'system' 중 하나)
 * @param hierarchy 컴포넌트의 계층 타입 ('primary', 'secondary' 중 하나)
 * @param stroke 컴포넌트의 외곽선 속성 ('outlined', 'filled' 중 하나)
 * @param shape 컴포넌트의 모양 속성 ('rounding', 'rounded1', 'rounded2', 'rounded3', flat 중 하나)
 * @returns 컴포넌트의 상태에 따른 스타일 객체
 */
export const getComponentVariants = (
	theme: DefaultTheme,
	appearance: ComponentAppearance,
	hierarchy: ComponentHierarchy,
	stroke: ComponentStroke,
	shape: ComponentShape,
) => {
	// 테마에서 컴포넌트 모양에 따른 경계선과 경계선 반경 가져오기
	const { border, borderRadii } = theme.shape[stroke][shape]

	/**
	 * 컴포넌트의 상태에 따른 스타일을 생성하는 내부 함수
	 * @param state 컴포넌트의 상태
	 * @returns 컴포넌트 상태에 따른 스타일 객체
	 */
	const getVariantStyles = (state: ComponentState) => {
		switch (stroke) {
			case 'outlined':
				return {
					border: `${border} solid ${getColour(
						theme,
						appearance,
						hierarchy,
						state,
					)}`,
					borderRadius: borderRadii,
					backgroundColor: 'none',
					color: getColour(theme, appearance, hierarchy, state),
				}
			case 'filled':
				return {
					border: 'none',
					borderRadius: borderRadii,
					backgroundColor: getColour(theme, appearance, hierarchy, state),
					color: getInvertedColour(theme, appearance, hierarchy, state),
				}
			default:
				throw new Error(`Unsupported button shape: ${stroke}`)
		}
	}

	return {
		initial: getVariantStyles('active'),
		hover: getVariantStyles('hover'),
		pressed: getVariantStyles('pressed'),
		disabled: {
			...getVariantStyles('inactive'),
			cursor: 'not-allowed',
		},
	}
}

/**
 * 컴포넌트의 크기에 따른 패딩 값을 반환하는 함수
 * @param theme 테마 객체
 * @param size 컴포넌트의 크기 ('lg', 'md', 'sm')
 * @returns 컴포넌트 크기에 따른 패딩 값 (문자열 형태)
 */
export const getPadding = (theme: DefaultTheme, size: ComponentSize) => {
	switch (size) {
		case 'lg':
			return `${theme.layout.component.padding.lg} ${theme.layout.component.padding.lg}`
		case 'md':
			return `${theme.layout.component.padding.default} ${theme.layout.component.padding.lg}`
		case 'sm':
			return `${theme.layout.component.padding.sm} ${theme.layout.component.padding.default}`
	}
}
