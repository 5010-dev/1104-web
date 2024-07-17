import { MouseEvent } from 'react'
import { ROUTES } from '../../../../../routes/routes'

import { useDeviceTypeStore } from '../../../../../store/layout/device-type.store'
import { useFreeTrialContentStore } from '../../../../../store/contents/free-trial-contents/free-trial-contents.store'
import useNavigateWithScroll from '../../../../../hooks/use-navigate-with-scroll'

import { FreeTrialOverviewSectionContainer } from './free-trial-overview-section.styles'

import Chip from '../../../../global/chip/chip.component'
import Button from '../../../../global/button/button.component'
import FreeTrialForm from '../../free-trial-form/free-trial-form.component'

export default function FreeTrialOverviewSection() {
	const deviceType = useDeviceTypeStore((state) => state.deviceType)
	const { features, summary } = useFreeTrialContentStore(
		(state) => state.overview,
	)
	const navigate = useNavigateWithScroll()

	const handleSignup = (e: MouseEvent<HTMLButtonElement>) =>
		navigate(`${ROUTES.AUTH}?state=signup`)

	return (
		<FreeTrialOverviewSectionContainer
			$deviceType={deviceType}
			id="free-trial-overview-container"
		>
			<div id="free-trial-overview-summary-container">
				<span id="free-trial-overview-summary-caption">{summary[0]}</span>
				<h3 id="free-trial-overview-summary">{summary[1]}</h3>
			</div>
			<ul id="free-trial-overview-ul">
				{features.map((item, index) => (
					<li key={index} className="free-trial-overview-li">
						<Chip
							className="free-trial-overview-li-chip"
							appearance="accent"
							hierarchy="primary"
							stroke="filled"
							shape="rounded3"
							size="sm"
							text={item.caption}
							inverted
						/>{' '}
						<p>{item.body}</p>
						<span className="free-trial-overview-li-subtitle">
							{item.subtitle}
						</span>
						{item.button ? (
							<Button
								id="free-trial-overview-li-button"
								accessibleName="free-trial-overview-ul"
								appearance="neutral"
								hierarchy="secondary"
								stroke="filled"
								shape="rounding"
								size="sm"
								text="회원가입하고 전자책 받기 →"
								handleClick={handleSignup}
							/>
						) : null}
						{item.form ? <FreeTrialForm /> : null}
					</li>
				))}
			</ul>
		</FreeTrialOverviewSectionContainer>
	)
}
