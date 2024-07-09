import { useEffect } from 'react'
import Markdown from 'react-markdown'

import { useServiceTermsStore } from '../../../store/terms/service-terms.store'

import { ServiceTermsProps } from './service-terms.types'

import { ServiceTermsContainer } from './service-terms.styles'

export default function ServiceTerms(props: ServiceTermsProps) {
	const { id, className, terms, height } = props
	const { fetchTermsData } = useServiceTermsStore()
	const termsData = useServiceTermsStore(
		(state) => state.serviceTermsList[terms].data,
	)

	useEffect(() => {
		fetchTermsData(terms)
	}, [fetchTermsData, terms])

	return (
		<ServiceTermsContainer $height={height} id={id} className={className}>
			<div id="terms-contents-container">
				<Markdown>{termsData}</Markdown>
			</div>
		</ServiceTermsContainer>
	)
}
