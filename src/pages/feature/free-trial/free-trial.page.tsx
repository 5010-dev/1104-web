import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useFreeTrialContentStore } from '../../../store/contents/freeTiralContentsStore'

import { FreeTrialContainer } from './free-trial.styles'

import FreeTrialTopBar from '../../../components/feature/free-trial-top-bar/free-trial-top-bar.component'
import FreeTrialTitleSection from '../../../components/feature/free-trial-contents/free-trial-title-section/free-trial-title-section.component'
import FreeTrialOverviewSection from '../../../components/feature/free-trial-contents/free-trial-overview-section/free-trial-overview-section/free-trial-overview-section.component'
import Footer from '../../../components/global/footer/footer.component'

export default function FreeTrial() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { backgroundImage } = useFreeTrialContentStore((state) => state.image)

	return (
		<FreeTrialContainer
			$deviceType={deviceType}
			$backgroundImage={backgroundImage}
		>
			<FreeTrialTopBar />
			<div id="free-trial-contents-container">
				<FreeTrialTitleSection />
				<hr className="free-trial-vertical-line" />
				<FreeTrialOverviewSection />
				<hr className="free-trial-vertical-line" />
			</div>
			<Footer />
		</FreeTrialContainer>
	)
}
