import { HomeContainer } from './home.styles'
import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

export default function Home() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return <HomeContainer $deviceType={deviceType}>HOME</HomeContainer>
}
