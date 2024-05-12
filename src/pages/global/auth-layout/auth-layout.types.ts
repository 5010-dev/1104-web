import { FormEvent } from 'react'

export type AuthValidity = {
	email: boolean
	password: boolean
}

export type AuthLayoutProps = {
	heading: string
	submitText: string
	handleAuthSubmit: (e: FormEvent<HTMLFormElement>) => void
}
