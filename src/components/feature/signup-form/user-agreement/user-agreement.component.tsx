import ServiceTerms from '../../service-terms/service-terms.component'

import { UserAgreementContainer } from './user-agreement.styles'

export default function UserAgreement() {
	return (
		<UserAgreementContainer>
			<ServiceTerms terms="policyTerms" height="10rem" />
			<ServiceTerms terms="privacyAgreement" height="10rem" />
		</UserAgreementContainer>
	)
}
