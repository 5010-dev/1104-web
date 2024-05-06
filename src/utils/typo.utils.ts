import { DefaultTheme, css } from 'styled-components'
import { TypoSystem } from '../styles/design-system/design-system.types'

/**
 * 타이포그래피 스타일을 반환하는 함수
 * @param theme 스타일 컴포넌트의 테마 객체
 * @param typoType 타이포그래피 타입
 * @returns 타이포그래피 타입에 맞는 스타일
 */
export const getTypography = (
	theme: DefaultTheme,
	typoType: keyof TypoSystem,
) => {
	// 주어진 타이포그래피 타입에 해당하는 스타일 속성 추출
	const { typeface, size, weight, leading, kerning } = theme.typo[typoType]

	// CSS 객체 반환
	return css`
		font-family: ${typeface};
		font-size: ${size};
		font-weight: ${weight};
		line-height: ${leading};
		letter-spacing: ${kerning};
	`
}
