import { ButtonProps } from './button.types'
import { ButtonContainer, getButtonVariants } from './button.styles'
import { useTheme } from 'styled-components'

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
		accessibleName,
	} = props

	const theme = useTheme()

	return (
		<ButtonContainer
			$appearance={appearance}
			$hierarchy={hierarchy}
			$shape={shape}
			onClick={handleClick}
			disabled={disabled}
			id={id}
			type={type}
			aria-labelledby={accessibleName}
			variants={getButtonVariants(theme, appearance, hierarchy)}
			initial="initial"
			whileHover={disabled ? undefined : 'hover'}
			whileTap={disabled ? undefined : 'pressed'}
			animate={disabled ? 'disabled' : 'initial'}
		>
			{icon}
			{text ? <span>{text}</span> : null}
		</ButtonContainer>
	)
}
