import { StyledHeadingProps } from './styled-heading.types'
import { StyledHeadingContainer } from './styled-heading.styles'

export default function StyledHeading(props: StyledHeadingProps) {
	const { heading, subheading } = props

	return (
		<StyledHeadingContainer>
			<span id="subheading">{subheading}</span>
			<h1 id="heading">{heading}</h1>
		</StyledHeadingContainer>
	)
}
