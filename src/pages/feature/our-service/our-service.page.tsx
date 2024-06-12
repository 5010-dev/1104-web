// TODO:
// import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { useOurServiceContentsStore } from '../../../store/ourServiceContentsStore'

import { OurServiceContainer } from './our-service.styles'

import Hero from '../../../components/global/hero/hero.component'
import OurServiceItem from '../../../components/feature/our-service-item/our-service-item.component'

export default function OurService() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useOurServiceContentsStore((state) => state.hero)
	const serviceList = useOurServiceContentsStore((state) => state.serviceList)

	// TODO:
	// const handleFreeTrial = (e: MouseEvent<HTMLButtonElement>) => {}

	return (
		<OurServiceContainer $deviceType={deviceType}>
			<Hero
				image={image}
				category={text.category}
				heading={text.heading}
				subheading={text.subheading}
				id="our-service-hero"
			/>
			<div id="our-service-contents-container" className="our-service-row">
				<div id="our-service-items-container">
					{serviceList.map((item, index) => (
						<OurServiceItem
							key={index}
							imageUrl={item.image}
							title={item.title}
							description={item.description}
							handleSeeDetails={() => {
								// navigate
							}}
						/>
					))}
				</div>
				{/* TODO: <div id='our-service-free-trial-container'></div> */}
			</div>
		</OurServiceContainer>
	)
}
