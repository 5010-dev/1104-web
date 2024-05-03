import { useDeviceTypeStore } from '../../../store/deviceTypeStore'

import { FooterContainer } from './footer.styles'

export default function Footer() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)

	return (
		<FooterContainer $deviceType={deviceType}>
			<span>© Copyright 1104 R&I.</span>All rights Reserved
		</FooterContainer>
	)
}
