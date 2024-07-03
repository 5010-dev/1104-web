import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { PartnershipContainer } from './partnership.styles'

import PartnershipHero from '../../../components/feature/partnership-contents/partnership-hero/partnership-hero.component'
import PartnershipOptions from '../../../components/feature/partnership-contents/partnership-options/partnership-options.component'

export default function Partnership() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<PartnershipContainer $deviceType={deviceType}>
			<PartnershipHero />
			<PartnershipOptions />
		</PartnershipContainer>
	)
}
