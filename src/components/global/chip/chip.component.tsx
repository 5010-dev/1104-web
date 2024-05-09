type ChipProps = {
	text: string
}

export default function Chip(props: ChipProps) {
	const { text } = props

	return <div>{text}</div>
}
