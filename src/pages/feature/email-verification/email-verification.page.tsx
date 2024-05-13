import { useLocation } from 'react-router-dom'

export default function EmailVerification() {
	const { search } = useLocation()
	const searchParams = new URLSearchParams(search)
	const email = searchParams.get('email')

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{email}
		</div>
	)
}
