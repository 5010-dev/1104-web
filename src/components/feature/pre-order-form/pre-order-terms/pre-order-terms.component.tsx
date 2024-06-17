import { useEffect } from 'react'
import Markdown from 'react-markdown'

import { useServiceTermsStore } from '../../../../store/serviceTermsStore'

import { PreOrderTermsProps } from './pre-order-terms.types'
import { PreOrderTermsContainer } from './pre-order-terms.styles'

import Modal from '../../../global/modal/modal.component'

export default function PreOrderTerms(props: PreOrderTermsProps) {
	const { handleClose } = props
	const fetchTermsData = useServiceTermsStore((state) => state.fetchTermsData)
	const termsData = useServiceTermsStore(
		(state) => state.serviceTermsList.eventTerms.data,
	)

	useEffect(() => {
		fetchTermsData('eventTerms')
	}, [fetchTermsData])

	return (
		<Modal
			title="이벤트 개인정보 제공 동의"
			children={
				<PreOrderTermsContainer>
					<Markdown>{termsData}</Markdown>
				</PreOrderTermsContainer>
			}
			handleClose={handleClose}
			scrollToTop={false}
		/>
	)
}
