import { ServiceTermsList } from '../../../store/serviceTermsStore'

export type ServiceTermsProps = {
	terms: keyof ServiceTermsList
	height?: string
}

export type ServiceTermsContainerProps = {
	$height?: string
}
