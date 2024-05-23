import { create } from 'zustand'
import { fetchMarkdownFile } from '../utils/markdown.utils'

import privacyAgreement from '../data/privacy-agreement.md'
import policyTerms from '../data/policy-terms.md'
import privacyTerms from '../data/privacy-terms.md'

type Terms = {
	data: string
	agreement: boolean
}

export interface ServiceTermsState {
	privacyAgreement: Terms
	privacyTerms: Terms
	policyTerms: Terms
	// ageVerification: Terms
}

export interface ServiceTermsAction {
	fetchTermsData: (key: keyof ServiceTermsState) => Promise<void>
	updateTermsAgreement: (key: keyof ServiceTermsState) => void
}

export const useServiceTermsStore = create<
	ServiceTermsState & ServiceTermsAction
>((set) => ({
	privacyAgreement: { data: '', agreement: false },
	privacyTerms: { data: '', agreement: false },
	policyTerms: { data: '', agreement: false },
	// ageVerification: { data: '', agreement: false},
	fetchTermsData: async (key: keyof ServiceTermsState) => {
		let filePath = ''
		switch (key) {
			case 'privacyAgreement':
				filePath = privacyAgreement
				break
			case 'privacyTerms':
				filePath = privacyTerms
				break
			case 'policyTerms':
				filePath = policyTerms
				break
			// case 'ageVerification':
			//   filePath = ageVerification
			//   break;
			default:
				throw new Error(`Invalid key: ${key}`)
		}

		const content = await fetchMarkdownFile(filePath)
		set({ [key]: { data: content } })
	},
	updateTermsAgreement: (key: keyof ServiceTermsState) =>
		set((state) => ({
			...state,
			[key]: { ...state, agreement: !state[key].agreement },
		})),
}))
