import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { FreeTrialContainer } from './free-trial.styles'

export default function FreeTrial() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return <FreeTrialContainer $deviceType={deviceType}></FreeTrialContainer>
}
