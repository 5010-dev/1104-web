import { DefaultTheme } from 'styled-components'
import designTokens from './design-tokens'

function hexToRgba(hex: string | number, alpha: number): string {
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

export const DesignSystem: DefaultTheme = {
	colour: {
		accent: {
			primary: {
				active: designTokens.colour.pointblue[300],
				inactive: hexToRgba(designTokens.colour.pointblue[300], 0.8),
				pressed: designTokens.colour.pointblue[500],
				hover: designTokens.colour.pointblue[200],
			},
			secondary: {
				active: designTokens.colour.grayscale[0],
				inactive: hexToRgba(designTokens.colour.grayscale[0], 0.8),
				pressed: designTokens.colour.pointblue[500],
				hover: designTokens.colour.pointblue[50],
			},
		},
		neutral: {
			primary: {
				active: designTokens.colour.grayscale[1000],
				inactive: designTokens.colour.grayscale[1000],
				pressed: designTokens.colour.grayscale[900],
				hover: designTokens.colour.grayscale[800],
			},
			secondary: {
				active: designTokens.colour.grayscale[0],
				inactive: hexToRgba(designTokens.colour.grayscale[0], 0.8),
				pressed: designTokens.colour.grayscale[200],
				hover: designTokens.colour.grayscale[0],
			},
		},
		system: {
			primary: {
				active: designTokens.colour.systemred[600],
				inactive: hexToRgba(designTokens.colour.systemred[600], 0.8),
				pressed: designTokens.colour.systemred[700],
				hover: designTokens.colour.systemred[400],
			},
			secondary: {
				active: designTokens.colour.grayscale[0],
				inactive: hexToRgba(designTokens.colour.grayscale[0], 0.8),
				pressed: designTokens.colour.systemred[200],
				hover: designTokens.colour.systemred[100],
			},
		},
	},
	typo: {
		display: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.xxxlg,
			weight: designTokens.typo.weight.xhv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
		heading1: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.xxlg,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
		heading2: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.xlg,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
		heading3: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.lg,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
		subheading: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.md,
			weight: designTokens.typo.weight.hv,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
		body: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.md,
			weight: designTokens.typo.weight.md,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
		caption: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.sm,
			weight: designTokens.typo.weight.lt,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
		overline: {
			typeface: designTokens.typo.typeface,
			size: designTokens.typo.size.xsm,
			weight: designTokens.typo.weight.lt,
			leading: designTokens.typo.leading.default,
			kerning: designTokens.typo.kerning.default,
		},
	},
	layout: {
		page: {
			width: designTokens.layout.dimension.horizontal.full,
			maxWidth: designTokens.layout.dimension.horizontal.maxFull,
			minWidth: designTokens.layout.dimension.horizontal.minFull,
			height: designTokens.layout.dimension.vertical.full,
			minHeight: designTokens.layout.dimension.vertical.fit,
			padding: {
				desktop: designTokens.layout.spacing.xxxlg,
				tablet: designTokens.layout.spacing.xxlg,
				mobile: designTokens.layout.spacing.xlg,
			},
			gutter: designTokens.layout.spacing.xlg,
		},
		section: {
			width: designTokens.layout.dimension.horizontal.fill,
			padding: 'none',
			gutter: designTokens.layout.spacing.lg,
		},
		container: {
			width: designTokens.layout.dimension.horizontal.fill,
			padding: designTokens.layout.spacing.md,
			gutter: designTokens.layout.spacing.md,
		},
		component: {
			width: designTokens.layout.dimension.horizontal.fill,
			padding: designTokens.layout.spacing.md,
			gutter: designTokens.layout.spacing.sm,
		},
	},
	shape: {
		outlined: {
			rounding: {
				border: designTokens.layout.weight.default,
				borderRadii: designTokens.layout.radii.max,
			},
			rounded1: {
				border: designTokens.layout.weight.default,
				borderRadii: designTokens.layout.radii.xlg,
			},
			rounded2: {
				border: designTokens.layout.weight.default,
				borderRadii: designTokens.layout.radii.lg,
			},
			rounded3: {
				border: designTokens.layout.weight.default,
				borderRadii: designTokens.layout.radii.sm,
			},
			flat: { border: designTokens.layout.weight.default, borderRadii: 'none' },
		},
		filled: {
			rounding: { border: 'none', borderRadii: designTokens.layout.radii.max },
			rounded1: { border: 'none', borderRadii: designTokens.layout.radii.xlg },
			rounded2: { border: 'none', borderRadii: designTokens.layout.radii.lg },
			rounded3: { border: 'none', borderRadii: designTokens.layout.radii.sm },
			flat: { border: 'none', borderRadii: 'none' },
		},
	},
	elevation: {
		layer0: '0 0 0',
		layer1: `${designTokens.layout.depth.sm} 0 0`,
		layer2: `${designTokens.layout.depth.lg} 0 ${designTokens.layout.depth.sm}`,
		layer3: `${designTokens.layout.depth.xxlg} 0 ${designTokens.layout.depth.lg}`,
	},
}

export default DesignSystem
