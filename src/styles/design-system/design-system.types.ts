export type ColourHierarchy = {
	primary: ColourVariant
	secondary: ColourVariant
}

export type ColourVariant = {
	active: string
	inactive: string
	pressed: string
	hover: string
}

export type TypoVariant = {
	typeface: string
	size: string
	weight: string | number
	leading: string
	kerning: string
}

export type PaddingVariant =
	| {
			desktop: string
			tablet: string
			mobile: string
	  }
	| { default: string; lg: string }

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

export type ElevationHierarchy = {
	layer0: string
	layer1: string
	layer2: string
	layer3: string
}
