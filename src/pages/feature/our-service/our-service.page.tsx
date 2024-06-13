import { MouseEvent } from 'react'

import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { useOurServiceContentsStore } from '../../../store/contents/ourServiceContentsStore'
import useNavigateWithScroll from '../../../hooks/useNavigateWithScroll'

import { OurServiceContainer } from './our-service.styles'

import Hero from '../../../components/global/hero/hero.component'
import OurServiceItem from '../../../components/feature/our-service-item/our-service-item.component'
import Button from '../../../components/global/button/button.component'

export default function OurService() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = useOurServiceContentsStore((state) => state.hero)
	const serviceList = useOurServiceContentsStore((state) => state.serviceList)
	const freeTrial = useOurServiceContentsStore((state) => state.freeTrial)
	const navigate = useNavigateWithScroll()

	const handleFreeTrial = (e: MouseEvent<HTMLButtonElement>) =>
		navigate('/free-trial')

	const handleNavigate = (e: MouseEvent<HTMLButtonElement>, pathName: string) =>
		navigate(pathName)

	const pathNameList = ['/5010-trading', 'quant']

	return (
		<OurServiceContainer $deviceType={deviceType} $imageUrl={freeTrial.image}>
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
							handleSeeDetails={(e) => handleNavigate(e, pathNameList[index])}
						/>
					))}
				</div>
				<div className="our-service-contents-row">
					<div id="our-service-free-trial-container">
						<h3 id="our-service-free-trial-heading">{freeTrial.heading}</h3>
						<p id="our-service-free-trial-body">{freeTrial.body}</p>
						<Button
							id="our-service-free-trial-button"
							accessibleName="our-service-free-trial-container"
							appearance="neutral"
							hierarchy="secondary"
							stroke="filled"
							shape="rounding"
							text="1:1 무료 상담받고 체험하기"
							handleClick={handleFreeTrial}
						/>
					</div>
				</div>
			</div>
		</OurServiceContainer>
	)
}
