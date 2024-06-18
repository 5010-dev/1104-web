import { useEffect } from 'react'
import Markdown from 'react-markdown'

import { useServiceTermsStore } from '../../../store/serviceTermsStore'

import { TermsModalProps } from './terms-modal.types'
import { TermsModalContainer } from './terms-modal.styles'

import Modal from '../../global/modal/modal.component'

export default function TermsModal(props: TermsModalProps) {
	const { title, terms, handleClose } = props
	const fetchTermsData = useServiceTermsStore((state) => state.fetchTermsData)
	const termsData = useServiceTermsStore(
		(state) => state.serviceTermsList[terms].data,
	)

	useEffect(() => {
		fetchTermsData(terms)
	}, [fetchTermsData, terms])

	return (
		<Modal
			title={title}
			children={
				<TermsModalContainer>
					<Markdown>{termsData}</Markdown>
				</TermsModalContainer>
			}
			handleClose={handleClose}
			scrollToTop={false}
		/>
	)
}
