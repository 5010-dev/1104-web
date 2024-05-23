import ServiceTerms from '../../service-terms/service-terms.component'

import { UserAgreementContainer } from './user-agreement.styles'

import CheckBox from '../../../global/check-box/check-box.component'

export default function UserAgreement() {
	return (
		<UserAgreementContainer>
			<ServiceTerms terms="policyTerms" height="10rem" />
			<CheckBox
				hierarchy="secondary"
				name="policyTerms"
				text="이용 약관 동의"
				isRequired
			/>
			<ServiceTerms terms="privacyAgreement" height="10rem" />
			<CheckBox
				hierarchy="secondary"
				name="policyTerms"
				text="개인정보 수집 및 이용 동의"
				isRequired
			/>
		</UserAgreementContainer>
	)
}
