import { ButtonProps } from './button.types'
import { ButtonContainer } from './button.styles'

export default function Button(props: ButtonProps) {
	const {
		appearance,
		hierarchy,
		shape,
		icon,
		text,
		handleClick,
		disabled,
		id,
		type,
	} = props

	return (
		<ButtonContainer
			$appearance={appearance}
			$hierarchy={hierarchy}
			$shape={shape}
			onClick={handleClick}
			disabled={disabled}
			id={id}
			type={type}
		>
			{icon}
			{text ? <span>{text}</span> : null}
		</ButtonContainer>
	)
}
