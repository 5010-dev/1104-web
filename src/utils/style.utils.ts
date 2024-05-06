import { DefaultTheme } from 'styled-components'
import {
	ComponentState,
	ComponentAppearance,
	ComponentHierarchy,
	ComponentShape,
} from '../styles/design-system/design-system.types'

import { getColour, getInvertedColour } from './colour.utils'

/**
 * 컴포넌트의 상태에 따른 스타일을 생성하는 함수
 * @param theme 테마 객체
 * @param appearance 컴포넌트의 외관 속성
 * @param hierarchy 컴포넌트의 계층 속성
 * @param shape 컴포넌트의 모양 속성
 * @returns 컴포넌트의 상태에 따른 스타일 객체
 */
export const getComponentVariants = (
	theme: DefaultTheme,
	appearance: ComponentAppearance,
	hierarchy: ComponentHierarchy,
	shape: ComponentShape,
) => {
	// 테마에서 컴포넌트 모양에 따른 경계선과 경계선 반경 가져오기
	const { border, borderRadii } = theme.shape[shape[0]][shape[1]]

	/**
	 * 컴포넌트의 상태에 따른 스타일을 생성하는 내부 함수
	 * @param state 컴포넌트의 상태
	 * @returns 컴포넌트 상태에 따른 스타일 객체
	 */
	const getVariantStyles = (state: ComponentState) => {
		switch (shape[0]) {
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
				throw new Error(`Unsupported button shape: ${shape[0]}`)
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
