import DesignSystem from '../../../styles/design-system/design-system.theme'

export type Typography = typeof DesignSystem.typo
export type TypographyVariant = keyof Typography
export type Color = string

export type HomeContainerProps = {
	$imageUrl: string
}
