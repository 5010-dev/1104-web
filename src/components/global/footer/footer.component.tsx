import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useContentsStore } from '../../../store/contentsStore'

import { FooterContainer } from './footer.styles'

export default function Footer() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { simpleDisclaimer } = useContentsStore((state) => state.footer)

	return (
		<FooterContainer $deviceType={deviceType}>
			<div id="disclaimer-container">
				{simpleDisclaimer.map((item, index) => (
					<p key={index}>{item}</p>
				))}
				<div id="copyright-text">
					<span>© Copyright 1104 R&I.</span>All rights Reserved
				</div>
			</div>
		</FooterContainer>
	)
}
