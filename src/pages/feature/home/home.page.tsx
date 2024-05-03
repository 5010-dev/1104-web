import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { HomeContainer } from './home.styles'

export default function Home() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useContentsStore((state) => state.home)

	return (
		<HomeContainer $deviceType={deviceType} $imageUrl={image.backgroundImage}>
			<div id="text-container">
				<h1 id="display">{text.display}</h1>
				<h3 id="subheading">{text.subheading}</h3>
			</div>
		</HomeContainer>
	)
}
