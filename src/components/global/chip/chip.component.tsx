import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { ChipProps } from './chip.types'
import { ChipContainer } from './chip.styles'

export default function Chip(props: ChipProps) {
	const { appearance, hierarchy, stroke, shape, size, text, id, className } =
		props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<ChipContainer
			$deviceType={deviceType}
			$appearance={appearance}
			$hierarchy={hierarchy}
			$stroke={stroke}
			$shape={shape}
			$size={size ? size : 'sm'}
			id={id}
			className={className}
		>
			{text}
		</ChipContainer>
	)
}
