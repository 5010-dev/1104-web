import { useDeviceTypeStore } from '../../../../store/deviceTypeStore'

import { CountdownUnitProps } from './countdown-unit.types'
import { CountdownUnitContainer } from './countdown-unit.styles'

export default function CountdownUnit(props: CountdownUnitProps) {
	const { value, unit } = props

	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<CountdownUnitContainer $deviceType={deviceType}>
			<span className="quant-counter">{value.toString().padStart(2, '0')}</span>
			<span className="quant-counter-unit">{unit.toUpperCase()}</span>
		</CountdownUnitContainer>
	)
}
