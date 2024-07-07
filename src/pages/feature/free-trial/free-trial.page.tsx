import { useLocation } from 'react-router-dom'

import { useDeviceTypeStore } from '../../../store/layout/device-type.store'
import { useFreeTrialContentStore } from '../../../store/contents/freeTrialContentsStore'

import { FreeTrialContainer } from './free-trial.styles'

import FreeTrialTopBar from '../../../components/feature/free-trial-top-bar/free-trial-top-bar.component'
import FreeTrialTitleSection from '../../../components/feature/free-trial-contents/free-trial-title-section/free-trial-title-section.component'
import FreeTrialOverviewSection from '../../../components/feature/free-trial-contents/free-trial-overview-section/free-trial-overview-section/free-trial-overview-section.component'
import FreeTrialForm from '../../../components/feature/free-trial-contents/free-trial-form/free-trial-form.component'
import Footer from '../../../components/global/footer/footer.component'
import FreeTrialComplete from '../../../components/feature/free-trial-contents/free-trial-complete/free-trial-complete.component'

export default function FreeTrial() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { backgroundImage } = useFreeTrialContentStore((state) => state.image)

	const location = useLocation()
	const state = location.state as { mode: 'register' | 'complete' } | undefined

	return (
		<FreeTrialContainer
			$deviceType={deviceType}
			$backgroundImage={backgroundImage}
		>
			{state?.mode !== 'complete' ? (
				<>
					<FreeTrialTopBar />
					{/* <div id="free-trial-contents-container"> */}
					<FreeTrialTitleSection />
					<hr className="free-trial-vertical-line" />
					<FreeTrialOverviewSection />
					<FreeTrialForm />
					{/* </div> */}
					<Footer />
				</>
			) : (
				<FreeTrialComplete />
			)}
		</FreeTrialContainer>
	)
}
