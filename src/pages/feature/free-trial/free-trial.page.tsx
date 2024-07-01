import { useDeviceTypeStore } from '../../../store/deviceTypeStore'
import { useFreeTrialContentStore } from '../../../store/contents/freeTiralContentsStore'

import { FreeTrialContainer } from './free-trial.styles'

import FreeTrialTopBar from '../../../components/feature/free-trial-top-bar/free-trial-top-bar.component'
import FreeTrialTitleSection from '../../../components/feature/free-trial-title-section/free-trial-title-section.component'

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
			</div>
		</FreeTrialContainer>
	)
}
