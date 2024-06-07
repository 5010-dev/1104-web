import { BannerProps } from './banner.types'
import { BannerContainer } from './banner.styles'

export default function Banner(props: BannerProps) {
	const { appearance = 'neutral', hierarchy = 'tertiary', children } = props

	return (
		<BannerContainer
			id="banner-container"
			$appearance={appearance}
			$hierarchy={hierarchy}
		>
			<div id="banner-contents-container">{children}</div>
		</BannerContainer>
	)
}
