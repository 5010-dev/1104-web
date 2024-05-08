import DesignSystem from '../../../styles/design-system/design-system.theme'
import { DeviceType } from '../../../store/deviceTypeStore'

export type Typography = typeof DesignSystem.typo
export type TypographyVariant = keyof Typography
export type Color = string

export type HeroContainerProps = {
	$deviceType: DeviceType
	$imageUrl: string
}
