import { ChangeEvent } from 'react'

export type CheckBoxProps = {
	id?: string
	className?: string
	text?: string
	name: string
	handleCheck?: (e: ChangeEvent<HTMLInputElement>) => void
}

export type CheckBoxContainerProps = {
	$isChecked: boolean
}
