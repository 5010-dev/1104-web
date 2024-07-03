import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { usePartnershipContentsStore } from '../../../store/contents/partnershipContentsStore'

import { PartnershipContainer } from './partnership.styles'

import Hero from '../../../components/global/hero/hero.component'

export default function Partnership() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { image, text } = usePartnershipContentsStore((state) => state.hero)
	const { category, heading, subheading } = text

	return (
		<PartnershipContainer $deviceType={deviceType}>
			<Hero
				image={image}
				category={category}
				heading={heading}
				subheading={subheading}
				shadeOpacity={[0.5, 0.75, 1]}
				// fullScreen={false}
			/>
		</PartnershipContainer>
	)
}
