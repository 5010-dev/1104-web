type Terms = {
	data: string
	agreement: boolean
}

export interface ServiceTermsList {
	privacyAgreement: Terms
	privacyTerms: Terms
	policyTerms: Terms
	ageVerification: Terms
	ecommerce: Terms
	privacyThirdParty: Terms
	purchaseAgreement: Terms
	subscription: Terms
	eventTerms: Terms
	refundPolicy: Terms
}

export interface ServiceTermsState {
	serviceTermsList: ServiceTermsList
}

export interface ServiceTermsAction {
	fetchTermsData: (key: keyof ServiceTermsList) => Promise<void>
	updateTermsAgreement: (key: keyof ServiceTermsList, value: boolean) => void
	toggleAllTermsAgreement: (value: boolean) => void
	resetServiceTermsStore: () => void
}
