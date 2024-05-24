import { ChangeEvent } from 'react'
import { ComponentHierarchy } from '../../../styles/design-system/design-system.types'

export type CheckBoxProps = {
	id?: string
	className?: string
	text?: string
	name: string
	// checked?: boolean
	checked: boolean
	isRequired?: boolean
	hierarchy: ComponentHierarchy
	handleCheck?: (e: ChangeEvent<HTMLInputElement>) => void
}

export type CheckBoxContainerProps = {
	$isChecked: boolean
	$hierarchy: ComponentHierarchy
}
