import { BannerProps } from './banner.types'
import { BannerContainer } from './banner.styles'

export default function Banner(props: BannerProps) {
	const {
		appearance = 'neutral',
		hierarchy = 'tertiary',
		position = 'bottom',
		children,
	} = props

	return (
		<BannerContainer
			id="banner-container"
			$position={position}
			$appearance={appearance}
			$hierarchy={hierarchy}
		>
			<div id="banner-contents-container">{children}</div>
		</BannerContainer>
	)
}
