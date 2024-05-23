import ServiceTerms from '../../service-terms/service-terms.component'

import { UserAgreementContainer } from './user-agreement.styles'

import CheckBox from '../../../global/check-box/check-box.component'

export default function UserAgreement() {
	return (
		<UserAgreementContainer>
			<CheckBox name="policyTerms" text="이용 약관 동의 (필수)" />
			<ServiceTerms terms="policyTerms" height="10rem" />
			<ServiceTerms terms="privacyAgreement" height="10rem" />
		</UserAgreementContainer>
	)
}
