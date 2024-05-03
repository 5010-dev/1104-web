import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import backgroundImage from '../../../assets/img/home-about-img.jpeg'

import { HomeContainer } from './home.styles'

export default function Home() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<HomeContainer $deviceType={deviceType} $imageUrl={backgroundImage}>
			HOME
		</HomeContainer>
	)
}
