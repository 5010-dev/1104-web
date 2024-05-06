export interface ColourSystem {
	accent: ColourHierarchy
	neutral: ColourHierarchy
	system: ColourHierarchy
}

export type ColourHierarchy = {
	primary: ColourVariant
	secondary: ColourVariant
	tertiary?: ColourVariant
}

export type ColourVariant = {
	active: string
	inactive: string
	pressed: string
	hover: string
}

export interface TypoSystem {
	display: TypoVariant
	heading1: TypoVariant
	heading2: TypoVariant
	heading3: TypoVariant
	subheading: TypoVariant
	body: TypoVariant
	caption: TypoVariant
	overline: TypoVariant
}

export type TypoVariant = {
	typeface: string
	size: string
	weight: string | number
	leading: string
	kerning: string
}

export interface LayoutSystem {
	page: LayoutVariant
	section: LayoutVariant
	container: LayoutVariant
	component: LayoutVariant
}

export type LayoutVariant = {
	width: string
	maxWidth?: string
	minWith?: string
	height?: string
	maxHeight?: string
	minHeight?: string
	padding: string | PaddingVariant
	gutter: string
}

export type PaddingVariant = { sm: string; default: string; lg: string }

export interface ShapeSystem {
	outlined: ShapeHierarchy
	filled: ShapeHierarchy
}

export type ShapeHierarchy = {
	rounding: ShapeVariant
	rounded1: ShapeVariant
	rounded2: ShapeVariant
	rounded3: ShapeVariant
	flat: ShapeVariant
}

export type ShapeVariant = {
	border: string
	borderRadii: string
}

export interface ElevationSystem {
	layer0: string
	layer1: string
	layer2: string
	layer3: string
}

export type ComponentAppearance = keyof ColourSystem
export type ComponentHierarchy = keyof ColourHierarchy
export type ComponentState = keyof ColourVariant
export type ComponentShape = [keyof ShapeSystem, keyof ShapeHierarchy]
