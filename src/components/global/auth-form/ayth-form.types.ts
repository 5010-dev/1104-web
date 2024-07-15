import { FormEvent, MouseEvent, ReactNode } from 'react'

export type AuthValidity = {
	email: boolean
	password: boolean
}

export type AuthFormProps = {
	variant?: 'email' | 'password-reset'
	heading: string
	submitText: string
	textLink?: {
		descriptionMessage: string
		linkMessage: string
		handleTextLink: (e: MouseEvent<HTMLSpanElement>) => void
	}
	handleAuthSubmit: (e: FormEvent<HTMLFormElement>) => void
	children?: ReactNode | null
	sellerCodeInput?: boolean
}
