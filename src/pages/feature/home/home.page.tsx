import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import Hero from '../../../components/feature/hero/hero.component'
import About from '../../../components/feature/about/about.component'

import { HomeContainer } from './home.styles'

export default function Home() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<HomeContainer $deviceType={deviceType}>
			<Hero />
			<About />
		</HomeContainer>
	)
}
