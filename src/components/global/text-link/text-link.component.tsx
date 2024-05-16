import { TextLinkProps } from './text-link.types'
import { TextLinkContainer } from './text-link.styles'

export default function TextLink(props: TextLinkProps) {
	const {
		id,
		className,
		icon,
		text,
		appearance,
		hierarchy,
		size,
		underlined = false,
		handleClick,
	} = props

	return (
		<TextLinkContainer
			id={id}
			className={className}
			$appearance={appearance}
			$hierarchy={hierarchy}
			$size={size}
			$underlined={underlined}
			$icon={icon ? true : false}
		>
			{icon}
			<span id="link-text" onClick={handleClick}>
				{text}
			</span>
		</TextLinkContainer>
	)
}
