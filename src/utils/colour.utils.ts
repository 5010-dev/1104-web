import { DefaultTheme } from 'styled-components'
import {
	ComponentAppearance,
	ComponentHierarchy,
	ComponentState,
} from '../styles/design-system/design-system.types'

/**
 * 헥스 색상 코드를 RGBA 색상 코드로 변환합니다.
 *
 * @param hex 헥스 색상 코드. 문자열 또는 숫자 형태로 전달할 수 있습니다.
 *            문자열 형태일 경우 "#" 기호로 시작해야 합니다. (예: "#FF0000")
 *            숫자 형태일 경우 0xRRGGBB 형태로 전달해야 합니다. (예: 0xFF0000)
 * @param alpha 색상의 투명도. 0에서 1 사이의 숫자 값입니다. (예: 0.5)
 *
 * @returns RGBA 색상 코드. "rgba(R, G, B, A)" 형태의 문자열입니다.
 *          R, G, B는 0에서 255 사이의 정수이며, A는 0에서 1 사이의 숫자입니다.
 *
 * @example
 * // 문자열 형태의 헥스 색상 코드를 사용하는 경우
 * hexToRgba("#FF0000", 0.5); // "rgba(255, 0, 0, 0.5)"
 *
 * // 숫자 형태의 헥스 색상 코드를 사용하는 경우
 * hexToRgba(0xFF0000, 0.5); // "rgba(255, 0, 0, 0.5)"
 */
export function hexToRgba(hex: string | number, alpha: number): string {
	let hexValue: string

	if (typeof hex === 'string') {
		hexValue = hex
	} else {
		hexValue = hex.toString()
	}

	const r = parseInt(hexValue.slice(1, 3), 16)
	const g = parseInt(hexValue.slice(3, 5), 16)
	const b = parseInt(hexValue.slice(5, 7), 16)

	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/**
 * 컴포넌트의 색상을 결정하는 함수
 *
 * @param theme 테마 객체
 * @param appearance 컴포넌트의 외관 타입 ('accent', 'neutral', 'system' 중 하나)
 * @param hierarchy 컴포넌트의 계층 타입 ('primary', 'secondary' 중 하나)
 * @param state 컴포넌트의 상태 ('active', 'hover', 'pressed', 'inactive' 중 하나)
 *
 * @returns 주어진 외관, 계층, 상태에 해당하는 컴포넌트 색상
 */
export const getColour = (
	theme: DefaultTheme,
	appearance: ComponentAppearance,
	hierarchy: ComponentHierarchy,
	state: ComponentState,
) => theme.colour[appearance][hierarchy][state]

/**
 * 컴포넌트의 반전된 색상을 결정하는 함수
 *
 * 컴포넌트의 계층 타입에 따라 반전된 색상을 반환합니다.
 * 'primary' 계층일 경우 'secondary' 색상을, 'secondary' 계층일 경우 'primary' 색상을 반환합니다.
 *
 * @param theme 테마 객체
 * @param appearance 컴포넌트의 외관 타입 ('accent', 'neutral', 'system' 중 하나)
 * @param hierarchy 컴포넌트의 계층 타입 ('primary', 'secondary' 중 하나)
 * @param state 컴포넌트의 상태 ('active', 'hover', 'pressed', 'inactive' 중 하나)
 *
 * @returns 주어진 외관, 계층, 상태에 해당하는 컴포넌트의 반전된 색상
 */
export const getInvertedColour = (
	theme: DefaultTheme,
	appearance: ComponentAppearance,
	hierarchy: ComponentHierarchy,
	state: ComponentState,
) =>
	hierarchy === 'primary'
		? theme.colour[appearance].secondary[state]
		: theme.colour[appearance].primary[state]
