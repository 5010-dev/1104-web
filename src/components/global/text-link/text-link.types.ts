import { ReactNode, MouseEvent } from 'react'

import {
	ComponentAppearance,
	ComponentHierarchy,
} from '../../../styles/design-system/design-system.types'

type Size = 'sm' | 'md'

export type TextLinkProps = {
	id?: string
	className?: string
	description?: string
	icon?: ReactNode | null
	text: string
	appearance: ComponentAppearance
	hierarchy: ComponentHierarchy
	size: Size
	underlined?: boolean
	handleClick: (e: MouseEvent<HTMLDivElement>) => void
}

export type TextLinkContainerProps = {
	$description: boolean
}

export type LinkContainerProps = {
	$appearance: ComponentAppearance
	$hierarchy: ComponentHierarchy
	$size: Size
	$underlined: boolean
	$icon?: boolean
}
