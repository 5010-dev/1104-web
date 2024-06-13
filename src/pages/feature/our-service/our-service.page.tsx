// TODO:
// import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { useOurServiceContentsStore } from '../../../store/contents/ourServiceContentsStore'

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
				id="our-service-hero"
				image={image}
				category={text.category}
				heading={text.heading}
				subheading={text.subheading}
				fullScreen={false}
				// showArrow={false}
				bodyContents={
					<>
						<hr id="our-service-hero-horizontal-line" />
						<div id="our-service-hero-body-container">
							{text.body.map((item, index) => (
								<p key={index} className="our-service-hero-body">
									{item}
								</p>
							))}
						</div>
					</>
				}
			/>
			<div id="our-service-contents-container">
				<div className="our-service-contents-row">
					{serviceList.map((item, index) => (
						<OurServiceItem
							key={index}
							imageUrl={item.image}
							heading={item.heading}
							subheading={item.subheading}
							body={item.body}
							features={item.features}
							handleSeeDetails={() => {
								// navigate
							}}
						/>
					))}
				</div>
				<div className="our-service-contents-row"></div>
				{/* TODO: <div id='our-service-free-trial-container'></div> */}
			</div>
		</OurServiceContainer>
	)
}
