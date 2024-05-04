/**
 * 디자인 토큰을 나타내는 제네릭 타입입니다.
 * @template T 토큰의 값 타입 (string 또는 number)
 */
export type DesignToken<T extends string | number = string> = Record<string, T>

/**
 * 색상 토큰을 나타내는 인터페이스입니다.
 * @extends DesignToken<string> DesignToken<string> 타입을 상속받습니다.
 */
export interface ColourToken extends DesignToken<string> {}

export interface ColourTokens {
	grayscale: ColourToken
	pointblue: ColourToken
	systemred: ColourToken
}

/**
 * 타이포그래피 토큰을 나타내는 인터페이스입니다.
 * @template T 토큰의 값 타입 (string 또는 number)
 * @extends DesignToken<T> DesignToken 인터페이스를 상속받습니다.
 */
export interface TypoToken<T extends string | number> extends DesignToken<T> {}

export interface TypoTokens {
	typeface: TypoToken<string>
	size: TypoToken<string>
	weight: TypoToken<number>
	leading: TypoToken<string>
	kerning: TypoToken<string>
}

export interface DimensionTokens {
	horizontal: DesignToken<string>
	vertical: DesignToken<string>
}

export interface LayoutTokens {
	breakpoint: DesignToken<number>
	dimension: DimensionTokens
	spacing: DesignToken<string>
	radii: DesignToken<string>
	depth: DesignToken<string>
	weight: DesignToken<string>
	style: DesignToken<string>
}

export interface DesignTokens {
	colour: ColourTokens
	typo: TypoTokens
	layout: LayoutTokens
}
