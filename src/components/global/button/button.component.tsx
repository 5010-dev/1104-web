import { ButtonProps } from './button.types'
import { ButtonContainer } from './button.styles'
import { getComponentVariants } from '../../../utils/style.utils'
import { useTheme } from 'styled-components'

export default function Button(props: ButtonProps) {
	const {
		appearance,
		hierarchy,
		stroke,
		shape,
		size,
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
			onClick={handleClick}
			disabled={disabled}
			$size={size ? size : 'md'}
			id={id}
			type={type ? type : 'button'}
			aria-labelledby={accessibleName}
			variants={getComponentVariants(
				theme,
				appearance,
				hierarchy,
				stroke,
				shape,
			)}
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
