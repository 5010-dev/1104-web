import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { useOurServiceContentsStore } from '../../../store/ourServiceContentsStore'

import { OurServiceContainer } from './our-service.styles'

import Hero from '../../../components/global/hero/hero.component'

export default function OurService() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useOurServiceContentsStore((state) => state.hero)

	return (
		<OurServiceContainer $deviceType={deviceType}>
			<Hero
				image={image}
				heading={text.heading}
				subheading={text.subheading}
				id="our-service-hero"
			/>
			<div id="our-service-contents-container" className="our-service-row">
				{/* TODO: <5010TradingService /> */}
				{/* TODO: <QuantTradingService /> */}
			</div>
		</OurServiceContainer>
	)
}
