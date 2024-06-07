import { BannerProps } from './banner.types'
import { BannerContainer } from './banner.styles'

import Button from '../button/button.component'

export default function Banner(props: BannerProps) {
	const {
		appearance = 'neutral',
		hierarchy = 'tertiary',
		buttonStroke = 'filled',
		position = 'bottom',
		buttonText,
		children,
		handleClick,
	} = props

	return (
		<BannerContainer
			id="banner-container"
			$position={position}
			$appearance={appearance}
			$hierarchy={hierarchy}
		>
			<div id="banner-contents-container">
				{children}
				{buttonText ? (
					<Button
						accessibleName="banner-container"
						id="banner-button"
						appearance={appearance}
						hierarchy={hierarchy === 'secondary' ? 'primary' : 'secondary'}
						stroke={buttonStroke}
						shape="rounding"
						size="sm"
						text={buttonText}
						handleClick={handleClick}
					/>
				) : null}
			</div>
		</BannerContainer>
	)
}
