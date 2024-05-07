import { ReactNode } from 'react'

type CardProps = {
	children?: ReactNode | null
}

export default function Card(props: CardProps) {
	const { children } = props

	return <div>{children}</div>
}
