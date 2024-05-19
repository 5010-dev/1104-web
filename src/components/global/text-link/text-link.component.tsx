import { TextLinkProps } from './text-link.types'
import { TextLinkContainer, LinkContainer } from './text-link.styles'

export default function TextLink(props: TextLinkProps) {
	const {
		id,
		className,
		description,
		icon,
		text,
		appearance,
		hierarchy,
		size,
		underlined = false,
		handleClick,
	} = props

	return (
		<TextLinkContainer $description={description ? true : false}>
			<span id="description-text">{description}</span>
			<LinkContainer
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
			</LinkContainer>
		</TextLinkContainer>
	)
}
