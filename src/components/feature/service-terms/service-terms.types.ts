import { ServiceTermsState } from '../../../store/serviceTermsStore'

export type ServiceTermsProps = {
	terms: keyof ServiceTermsState
	height?: string
}

export type ServiceTermsContainerProps = {
	$height?: string
}
