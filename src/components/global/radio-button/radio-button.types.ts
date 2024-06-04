import { ChangeEvent } from 'react'

export type RadioButtonProps = {
	id?: string
	className?: string
	name?: string
	text: string
	value?: string
	isChecked?: boolean
	handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export type RadioButtonContainerProps = {
	$isChecked: boolean
}
