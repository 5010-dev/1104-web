import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { CardProps } from './card.types'
import { CardContainer } from './card.styles'

export default function Card(props: CardProps) {
	const {
		id,
		className,
		children,
		appearance = 'neutral',
		hierarchy = 'primary',
		stroke = 'filled',
		shape = 'rounded2',
		opacity,
		handleClick,
	} = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CardContainer
			id={id}
			className={className}
			$deviceType={deviceType}
			$appearance={appearance}
			$hierarchy={hierarchy}
			$stroke={stroke}
			$shape={shape}
			$opacity={opacity}
			onClick={handleClick}
			$handleClick={handleClick}
		>
			{children}
		</CardContainer>
	)
}
