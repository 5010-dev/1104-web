import { TextLinkProps } from './text-link.types'
import { TextLinkContainer } from './text-link.styles'

export default function TextLink(props: TextLinkProps) {
	const {
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
			$appearance={appearance}
			$hierarchy={hierarchy}
			$size={size}
			$underlined={underlined}
		>
			{icon}
			<span id="link-text" onClick={handleClick}>
				{text}
			</span>
		</TextLinkContainer>
	)
}
