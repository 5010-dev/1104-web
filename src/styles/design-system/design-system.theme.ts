import { DefaultTheme } from 'styled-components'
import designTokens from '../degisn-tokens/design-tokens.tokens'
import { hexToRgba } from '../../utils/colour.utils'
import {
	ColourSystem,
	ColourHierarchy,
	ColourVariant,
	TypoSystem,
	TypoVariant,
	LayoutSystem,
	LayoutVariant,
	ShapeSystem,
	ShapeHierarchy,
	ShapeVariant,
	ElevationSystem,
} from './design-system.types'

export const DesignSystem: DefaultTheme = {
	colour: {
		accent: {
			primary: {
				active: designTokens.colour.pointblue[300],
				inactive: hexToRgba(designTokens.colour.pointblue[300], 0.5),
				pressed: designTokens.colour.pointblue[400],
				hover: designTokens.colour.pointblue[200],
			} as ColourVariant,
			secondary: {
				active: designTokens.colour.grayscale[0],
				inactive: hexToRgba(designTokens.colour.grayscale[0], 0.5),
				pressed: designTokens.colour.pointblue[100],
				hover: designTokens.colour.pointblue[50],
			} as ColourVariant,
		} as ColourHierarchy,
		neutral: {
			primary: {
				active: designTokens.colour.grayscale[1000],
				inactive: hexToRgba(designTokens.colour.grayscale[1000], 0.5),
				pressed: designTokens.colour.grayscale[900],
				hover: designTokens.colour.grayscale[800],
			} as ColourVariant,
			secondary: {
				active: designTokens.colour.grayscale[0],
				inactive: hexToRgba(designTokens.colour.grayscale[0], 0.5),
				pressed: designTokens.colour.grayscale[200],
				hover: designTokens.colour.grayscale[0],
			} as ColourVariant,
			tertiary: {
				active: designTokens.colour.grayscale[900],
				inactive: hexToRgba(designTokens.colour.grayscale[900], 0.5),
				pressed: designTokens.colour.grayscale[1000],
				hover: designTokens.colour.grayscale[800],
			},
		} as ColourHierarchy,
		system: {
			primary: {
				active: designTokens.colour.systemred[600],
				inactive: hexToRgba(designTokens.colour.systemred[600], 0.5),
				pressed: designTokens.colour.systemred[700],
				hover: designTokens.colour.systemred[400],
			} as ColourVariant,
			secondary: {
				active: designTokens.colour.systemred[600],
				inactive: hexToRgba(designTokens.colour.systemred[600], 0.5),
				pressed: designTokens.colour.systemred[700],
				hover: designTokens.colour.systemred[400],
			} as ColourVariant,
		} as ColourHierarchy,
	} as ColourSystem,

	typo: {
		display: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.xxxlg,
			weight: designTokens.typo.weight.xhv,
			leading: designTokens.typo.leading.narrow,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		heading1: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.xxlg,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		heading2: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.xlg,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		heading3: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.lg,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		subheading: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.md,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		body: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.md,
			weight: designTokens.typo.weight.md,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		caption: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.sm,
			weight: designTokens.typo.weight.lt,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		overline: {
			typeface: designTokens.typo.typeface.default,
			size: designTokens.typo.size.xsm,
			weight: designTokens.typo.weight.lt,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
		quote: {
			typeface: designTokens.typo.typeface.serif,
			size: designTokens.typo.size.md,
			weight: designTokens.typo.weight.md,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		} as TypoVariant,
	} as TypoSystem,

	layout: {
		page: {
			width: designTokens.layout.dimension.horizontal.full,
			maxWidth: designTokens.layout.dimension.horizontal.maxFull,
			minWidth: designTokens.layout.dimension.horizontal.minFull,
			height: designTokens.layout.dimension.vertical.full,
			minHeight: designTokens.layout.dimension.vertical.fit,
			padding: 'none',
			gutter: designTokens.layout.spacing.xhg,
		} as LayoutVariant,
		section: {
			width: designTokens.layout.dimension.horizontal.fill,
			maxWidth: designTokens.layout.dimension.horizontal.maxFull,
			minHeight: designTokens.layout.dimension.vertical.full,
			padding: {
				lg: designTokens.layout.spacing.xxxlg,
				default: designTokens.layout.spacing.xxxlg,
				sm: designTokens.layout.spacing.xlg,
			},
			gutter: designTokens.layout.spacing.xxxlg,
		} as LayoutVariant,
		container: {
			width: designTokens.layout.dimension.horizontal.fill,
			maxWidth: designTokens.layout.dimension.horizontal.midFull,
			padding: {
				lg: designTokens.layout.spacing.xlg,
				default: designTokens.layout.spacing.xlg,
				sm: designTokens.layout.spacing.lg,
			},
			gutter: designTokens.layout.spacing.lg,
		} as LayoutVariant,
		component: {
			width: designTokens.layout.dimension.horizontal.fill,
			padding: {
				lg: designTokens.layout.spacing.xlg,
				default: designTokens.layout.spacing.md,
				sm: designTokens.layout.spacing.sm,
			},
			gutter: designTokens.layout.spacing.md,
		} as LayoutVariant,
	} as LayoutSystem,

	shape: {
		outlined: {
			rounding: {
				boxShadow: `0 0 0 ${designTokens.layout.weight.default} inset`,
				borderRadii: designTokens.layout.radii.max,
			} as ShapeVariant,
			rounded1: {
				boxShadow: `0 0 0 ${designTokens.layout.weight.default} inset`,
				borderRadii: designTokens.layout.radii.xlg,
			} as ShapeVariant,
			rounded2: {
				boxShadow: `0 0 0 ${designTokens.layout.weight.default} inset`,
				borderRadii: designTokens.layout.radii.lg,
			} as ShapeVariant,
			rounded3: {
				boxShadow: `0 0 0 ${designTokens.layout.weight.default} inset`,
				borderRadii: designTokens.layout.radii.sm,
			} as ShapeVariant,
			flat: {
				boxShadow: `0 0 0 ${designTokens.layout.weight.default} inset`,
				borderRadii: 'none',
			} as ShapeVariant,
		} as ShapeHierarchy,
		filled: {
			rounding: {
				boxShadow: 'none',
				borderRadii: designTokens.layout.radii.max,
			} as ShapeVariant,
			rounded1: {
				boxShadow: 'none',
				borderRadii: designTokens.layout.radii.xlg,
			} as ShapeVariant,
			rounded2: {
				boxShadow: 'none',
				borderRadii: designTokens.layout.radii.lg,
			} as ShapeVariant,
			rounded3: {
				boxShadow: 'none',
				borderRadii: designTokens.layout.radii.sm,
			} as ShapeVariant,
			flat: { boxShadow: 'none', borderRadii: 'none' } as ShapeVariant,
		} as ShapeHierarchy,
	} as ShapeSystem,

	elevation: {
		layer0: '0 0 0',
		layer1: `0 ${designTokens.layout.depth.sm} 0`,
		layer2: `0 ${designTokens.layout.depth.lg} ${designTokens.layout.depth.sm}`,
		layer3: `0 ${designTokens.layout.depth.xxlg} ${designTokens.layout.depth.lg}`,
	} as ElevationSystem,
}

export default DesignSystem
